import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombies, setZombies] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]

  );
  const totalStrength = team.reduce((sum, member) => sum + member.strength, 0);
  const totalAgility = team.reduce((sum, member) => sum + member.agility, 0);

const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    setTeam(prev => [...prev, fighter]);
    setZombies(prev => prev.filter(f => f.id !== fighter.id));
    setMoney(prev => prev - fighter.price);
  } else {
    console.log("Not enough money");
  }
};

const handleRemoveFighter = (fighter) => {
  setTeam(prev => prev.filter(f => f.id !== fighter.id));
  setZombies(prev => [...prev, fighter]);
  setMoney(prev => prev + fighter.price);
};

  return (
    <div className="app-container">
      <h1 className="app-title">Zombie Fighters</h1>
      
      <div className="stats-container">
        <h2>Money: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
      </div>

      <h2 className="section-title">Team</h2>
      {team.length === 0 ? (
        <p className="team-message">Pick some team members</p>
      ) : (
        <ul>
          {team.map(fighter => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} className="fighter-image" />
              <h3 className="fighter-name">{fighter.name}</h3>
              <p className="fighter-stats">Price: {fighter.price}</p>
              <p className="fighter-stats">Strength: {fighter.strength}</p>
              <p className="fighter-stats">Agility: {fighter.agility}</p>
              <button 
                className="fighter-button remove-button" 
                onClick={() => handleRemoveFighter(fighter)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2 className="section-title">Fighters</h2>
      <ul>
        {zombies.map(fighter => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} className="fighter-image" />
            <h3 className="fighter-name">{fighter.name}</h3>
            <p className="fighter-stats">Price: {fighter.price}</p>
            <p className="fighter-stats">Strength: {fighter.strength}</p>
            <p className="fighter-stats">Agility: {fighter.agility}</p>
            <button 
              className="fighter-button" 
              onClick={() => handleAddFighter(fighter)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
