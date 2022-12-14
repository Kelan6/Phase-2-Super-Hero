import React from "react";
import combatIcon from "../assets/combat.png";
import durabilityIcon from "../assets/durability.png";
import intelligenceIcon from "../assets/intelligence.png";
import powerIcon from "../assets/power.png";
import speedIcon from "../assets/speed.png";
import strengthIcon from "../assets/strength.png";

function HeroCard({ hero, onHeroCardClick, onFavoriteHero, setFavClicked, favClicked, handleFavorites }) {
  function displayHero() {
    onHeroCardClick(hero);
  }

  function clickedFavorites() {
    onFavoriteHero(hero);
  }

  function onFavorite(e) {
    e.stopPropagation()
    setFavClicked((favClicked) => !favClicked)
    console.log(favClicked)
    handleFavorites(hero)

  }

  return (
    <div id="image-container">
      <div id="image-background">
        <img
          src={hero.images.sm}
          alt=""
          id="images"
          onClick={displayHero}
        ></img>
      </div>
      <h4 id="titles" onClick={displayHero}>
        {hero.name}
      </h4>
      <div id="hero-powerstats">
        <div>
          <span>
            {" "}
            <img
              className="stats-icons"
              src={intelligenceIcon}
              alt="intelligence"
            />{" "}
            {hero.powerstats.intelligence}{" "}
          </span>
          <span>
            {" "}
            <img
              className="stats-icons"
              src={strengthIcon}
              alt="strength"
            />{" "}
            {hero.powerstats.strength}{" "}
          </span>
          <span>
            {" "}
            <img className="stats-icons" src={speedIcon} alt="speed" />{" "}
            {hero.powerstats.speed}
          </span>
          <br></br>
          <span>
            {" "}
            <img
              className="stats-icons"
              src={durabilityIcon}
              alt="durability"
            />{" "}
            {hero.powerstats.durability}{" "}
          </span>
          <span>
            {" "}
            <img className="stats-icons" src={powerIcon} alt="power" />{" "}
            {hero.powerstats.power}{" "}
          </span>
          <span>
            {" "}
            <img className="stats-icons" src={combatIcon} alt="combat" />{" "}
            {hero.powerstats.combat}{" "}
          </span>
        </div>
      </div>
      <div>
        <button onClick={clickedFavorites} id="add-to-favs">
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
