import React from 'react';
import aboutHeroImage from "@/assets/images/about/herosection.svg";
import HeroSection from "@/components/shared/HeroSection";

const AboutHeroSection = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            About <span className="text-primryBtn">Us</span>
          </>
        }
        description="We are a team of developers who are passionate about creating beautiful and functional websites that help businesses connect with their audience through powerful survey tools."
        primaryButtonText="Exolore"
        secondaryButtonText="create"
        heroImage={aboutHeroImage}
        primaryButtonLink="/create-survey"
        secondaryButtonLink="/contact"
      />
    </>
  );
}

export default AboutHeroSection;
