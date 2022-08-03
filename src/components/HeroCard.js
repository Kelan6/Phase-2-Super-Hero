import React from "react";
import combatIcon from "../assets/combat.png";
import durabilityIcon from "../assets/durability.png";
import intelligenceIcon from "../assets/intelligence.png";
import powerIcon from "../assets/power.png";
import speedIcon from "../assets/speed.png";
import strengthIcon from "../assets/strength.png";

function HeroCard({ hero, onHeroCardClick }) {

  function displayHero() {
    onHeroCardClick(hero);
  }

  return (
    <div id="image-container">
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
      <img src={hero.images.sm} alt="" id="images" onClick={displayHero}></img>
      <div>
        <button id="add-to-favs">Add to Favorites</button>
      </div>
    </div>
  );
}

export default HeroCard;
