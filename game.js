let boss = {
  health: 250,
  name: 'Uknar the Life Drainer',
  turn: 0,
  atkmod: [0, 1, 3]
}
let player = {
  stursa: {
    name: 'Stursa', health: 150, laserdmg: 1, missledmg: 4, barragedmg: 8, energy: 200
  },
  goldarrow: { name: 'Golden Arrow', health: 100, laserdmg: 2, missledmg: 6, barragedmg: 12, energy: 100 }
}

let actions = {
  piercing: { name: 'Pierce', mod: 5, description: 'Weapons modified to pierce hull\'s shields', cost: 10 },
  overdrive: { name: 'Overdrive', mod: 10, description: 'Weapons Charged to maximum power', cost: 25 },
  burst: { name: 'Maxim Burst', mod: 20, description: 'Ultimate Weapon is ready to go', cost: 50 }
}
let x = ''
let modifier = 0
let cool = boss.turn - 1

function useaction() {
  let z = cooldowns()
  switch (x) {
    case 'pierce':

      if (z = boss.turn) {
        return actions.piercing.mod
        break;
      }
      else { return 0 }
    case 'drive':

      if (z = boss.turn) {
        return actions.overdrive.mod
        break;
      }
      else { return 0 }
    case 'burst':
      if (z = boss.turn) {

        return actions.burst.mod
        break;
      }
      else { return 0 }
    default:
      return 0
  }

}



//have action mods apply to the boss using a number randomizer and if statement
function bossaction() {

}

function healthcheck() {
  if (boss.health <= 0) {
    boss.health = 0
  }
  return boss.health
}
function laser() {
  let modifier = useaction()
  let ttldmg = 1 + modifier
  boss.health = (boss.health - ttldmg)
  boss.turn = (boss.turn + 1)

  return boss.health,
    boss.turn,
    update()
}
function missle() {

  let modifier = useaction()

  let ttldmg = 5 + modifier
  boss.health = (boss.health - ttldmg)
  boss.turn = (boss.turn + 1)
  return boss.health,
    boss.turn,
    update()
}
function barrage() {
  let modifier = useaction()

  let ttldmg = 10 + modifier
  boss.health = (boss.health - ttldmg)
  boss.turn = (boss.turn + 1)
  return boss.health,
    boss.turn,

    update()
}
function update() {
  healthcheck()

  let n = boss.health.toString()
  let y = boss.turn.toString()

  return document.getElementById('bosshealth').innerText = n,
    document.getElementById('bossname').innerText = boss.name,
    document.getElementById('hits').innerText = y
}
function cooldowns() {

  if (cool == boss.turn) {
    return cool
  }
  else if (cool < boss.turn) {
    alert("Ship's sytems are currently cooling down")
    cool = cool + 1

    return 0
  }
  else {
    cool = boss.turn
  }
  return cool = boss.turn - 3
}
update()