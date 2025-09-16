import './App.css'
import { useState } from 'react';

const App = () => {

  let totalStrength = 0
  let totalAgility = 0

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
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
  )

  const handleAddFighter = (fighter) => {
    const filteredFighters = zombieFighters.filter((zombieFighter) => zombieFighter.id !== fighter.id)
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      setZombieFighters([...filteredFighters])
      setMoney(money - fighter.price)
    } else {
      console.log('Not enough Money')
    }
    
  }

  const handleRemoveFighter = (fighter) => {
    const filteredFighters = team.filter((teamFighter) => teamFighter.id !== fighter.id)
    setTeam([...filteredFighters])
    setZombieFighters([...zombieFighters, fighter])
    setMoney(money + fighter.price) 
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: ${money}</h3>
      <h3>Team Strength</h3>
      <div>{team.reduce((acc, currVal) => acc+=currVal.strength, totalStrength)}</div>
      <h3>Team Agility</h3>
      <div>{team.reduce((acc, currVal) => acc+=currVal.agility, totalAgility)}</div>
      <h3>Team</h3>
      <div><ul>
      { team.length > 0 ? team.map((fighter) => (
        
          <li>
            <div><img src={fighter.img} alt={fighter.name} /></div>
            <div>{fighter.name}</div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        
      )) : 'Pick some team members' }</ul></div>
      <h3>Fighter List</h3>
      <div><ul>
        { zombieFighters.map((zombieFighter) => (
        
          <li>
            <div><img src={zombieFighter.img} alt={zombieFighter.name} /></div>
            <div>{zombieFighter.name}</div>
            <div>Price: {zombieFighter.price}</div>
            <div>Strength: {zombieFighter.strength}</div>
            <div>Agility: {zombieFighter.agility}</div>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        
        ))}</ul>
      </div>
    </>
  );
}

export default App
