import { Typography } from '@mui/material';
import { heroPhotos, useNavbarHeight } from '../../lib';
import { HeroContainer, HeroContent, HeroImage, HeroInfoBlock, AnimatedTitle } from './Hero.styled';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Hero = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <HeroContainer>
      <AnimatedTitle
        id="hero"
        variant="h2"
        sx={{ scrollMarginTop: `${navbarHeight}px` }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        ZLATOVA VERONIKA
      </AnimatedTitle>
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeroInfoBlock>
          <Typography variant="body1" mb="20px">
            Hello, I&apos;m a passionate model and content creator. Welcome to my personal space
            where you can check out my works, videos and get in touch. I&apos;m open to professional
            opportunities and collaborations. You can reach out to me to discuss potential projects.
          </Typography>
          <Typography variant="h5">Stats</Typography>
          <Typography variant="body1">
            Height: 172 cm / 5&apos;7.7&quot;
            <br />
            Weight: 58 kg / 127.9 lbs
            <br />
            Bust: 90 cm / 35.43&quot;
            <br />
            Waist: 69 cm / 27.17&quot;
            <br />
            Hips: 97 cm / 38.19&quot;
            <br />
            Hair: Brown
            <br />
            Eyes: Brown
          </Typography>
        </HeroInfoBlock>

        <HeroInfoBlock>
          <HeroImage src={heroPhotos.light} alt="model" loading="lazy" />
        </HeroInfoBlock>
      </HeroContent>
    </HeroContainer>
  );
};
