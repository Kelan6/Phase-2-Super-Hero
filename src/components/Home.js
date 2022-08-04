import React from "react";
import HeroContainer from "./HeroContainer";
import HeroSpecs from "./HeroSpecs";

const Home = ({
  heroes,
  featuredHero,
  showHeroSpecs,
  onHeroCardClick,
  onGoBack,
}) => {
  return (
    <div id="deezboiz-container">
      <h1 id="super">TEST</h1>
      {showHeroSpecs ? (
        <HeroSpecs
          featuredHero={featuredHero}
          showHeroSpecs={showHeroSpecs}
          onGoBack={onGoBack}
        />
      ) : (
        <HeroContainer heroes={heroes} onHeroCardClick={onHeroCardClick} />
      )}
    </div>
  );
};

export default Home;
