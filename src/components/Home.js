import React from "react";
import HeroContainer from "./HeroContainer";
import HeroSpecs from "./HeroSpecs";

const Home = ({
  heroes,
  featuredHero,
  showHeroSpecs,
  onHeroCardClick,
  onGoBack,
  onFavoriteHero,
}) => {
  return (
    <div id="deezboiz-container">
      <h1 id="super">TEST</h1>
      {showHeroSpecs ? (
        <HeroSpecs
          featuredHero={featuredHero}
          showHeroSpecs={showHeroSpecs}
          onGoBack={onGoBack}
          onFavoriteHero={onFavoriteHero}
        />
      ) : (
        <HeroContainer
          heroes={heroes}
          onHeroCardClick={onHeroCardClick}
          onFavoriteHero={onFavoriteHero}
        />
      )}
    </div>
  );
};

export default Home;
