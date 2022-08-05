import React, { useState } from "react";
import HeroCard from "./HeroCard";

function SortBy({ heroes, setHeroes, onHeroCardClick, onFavoriteHero }) {
  //STATE
  const [intelOrder, setIntelOrder] = useState(true);
  const [strengthOrder, setStrengthOrder] = useState(true);
  const [speedOrder, setSpeedOrder] = useState(true);
  const [durabilityOrder, setDurabilityOrder] = useState(true);
  const [powerOrder, setPowerOrder] = useState(true);
  const [combatOrder, setCombatOrder] = useState(true);
  const [nameOrder, setNameOrder] = useState(true);

  //MAPPING
  const heroesArr = heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} onHeroCardClick={onHeroCardClick} onFavoriteHero={onFavoriteHero} />;
  });

  //SORTING
  function onSort(e, attr, order, setOrder) {
    e.preventDefault();
    const sortedCategory = heroes.sort(function (a, b) {
      return order
        ? b.powerstats[attr] - a.powerstats[attr]
        : a.powerstats[attr] - b.powerstats[attr];
    });
    setOrder(!order);
    setHeroes([...sortedCategory]);
  }

  function sortName(e, order, setOrder) {
    e.preventDefault();
    const heroName = e.target.id
    const sortedNames = heroes.sort(function (a, b) {
      return order
        ? a[heroName].localeCompare(b[heroName])
        : b[heroName].localeCompare(a[heroName]);
    })
    setOrder(!order);
    setHeroes([...sortedNames])
  }

  //BUTTONS
  return (
    <div id="sorting-container">
      <h1 className="page-title">SORT BY CATEGORY</h1>
      <div id="button-container">
        <button
          className="sort-button"
          id="name"
          onClick={(e) => sortName(e, nameOrder, setNameOrder)}
        >
          Sort by Name
        </button>
        <button
          className="sort-button"
          id="intelligence"
          onClick={(e) => onSort(e, "intelligence", intelOrder, setIntelOrder)}
        >
          Sort by Intelligence
        </button>
        <button
          className="sort-button"
          id="strength"
          onClick={(e) =>
            onSort(e, "strength", strengthOrder, setStrengthOrder)
          }
        >
          Sort by Strength
        </button>
        <button
          className="sort-button"
          id="speed"
          onClick={(e) => onSort(e, "speed", speedOrder, setSpeedOrder)}
        >
          Sort by Speed
        </button>
        <button
          className="sort-button"
          id="durability"
          onClick={(e) =>
            onSort(e, "durability", durabilityOrder, setDurabilityOrder)
          }
        >
          Sort by Durability
        </button>
        <button
          className="sort-button"
          id="power"
          onClick={(e) => onSort(e, "power", powerOrder, setPowerOrder)}
        >
          Sort by Power
        </button>
        <button
          className="sort-button"
          id="combat"
          onClick={(e) => onSort(e, "combat", combatOrder, setCombatOrder)}
        >
          Sort by Combat
        </button>

        <div>{heroesArr}</div>
      </div>
    </div>
  );
}

export default SortBy;
