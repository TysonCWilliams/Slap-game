// NOTE
// declare variables
let hp = 100
let totalHits = 0
let targetName = 'boss'
let currentCharacterTurn = null


// chars
let charList = {
  eHonda: {
    health: 150,
    attacks: {
      slap: 1,
      kick: 10,
      punch: 5,
      superslap: 12
    },
    mobility: 15,
    buffsArr: []
  },
  Scorpion: {
    health: 120,
    attacks: {
      slap: 1,
      kick: 10,
      punch: 5,
      harpoon: 15
    },
    mobility: 35,
    buffsArr: []
  }
}



// buffs + debuffs
let buffs = {
  fire: {
    name: 'Fire',
    modifier: 2,
    description: 'It burns!'
  },
  
  poison: {
    name: 'Poison',
    modifier: 0.5,
    description: 'Slow death!'
  },
  
  shield: {
    name: 'Shield',
    modifier: 10,
    description: 'Back at ya!'
  },
  
  heal: {
    name: 'Heal',
    modifier: 20,
    description: 'I\'m invincible!'
  }
}


  // NOTE
//   // functions

let addTotalBuffModifiers = () => {

  for (let i = 0; i < buffs.length; i++) {
    const buff = buffs[i];
    
  }
}


let setCharacterTurn = (character) => {
  currentCharacterTurn = character
}


let applyBuff = (buffSelected) => {
  if (charList[currentCharacterTurn].buffsArr[buffSelected]) {
    charList[currentCharacterTurn].buffsArr.pop(buffs[buffSelected])
  } else {
    charList[currentCharacterTurn].buffsArr.push(buffs[buffSelected])
  }
}

// test applyBuff
// let buffCaught = applyBuff()


let hitTarget = attack => {
  switch (attack) {
    case 'slap':
      hp--
      break
    case 'kick':
      hp -= 10
      break
    case 'punch':
      hp -= 5
      break
    default:
      'No hit on target!'
  }
  totalHits++
  draw()
}

let draw = () => {
  document.getElementById('health').innerText = hp.toString()
  document.getElementById('totalHits').innerText = totalHits.toString()
}

draw()