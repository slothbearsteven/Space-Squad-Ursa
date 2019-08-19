let boss = {
  health: 250,
  name: 'Uknar the Life Drainer',
  turn: 0,
  atkmod: [0, 1, 3]
}
let player = {
  stursa: {
    name: 'Stursa', health: 150, laserdmg: 2, missledmg: 4, barragedmg: 8,
  }
}

let actions = {
  piercing: { name: 'Pierce', mod: 5, description: 'Weapons modified to pierce hull\'s shields', cost: 10 },
  overdrive: { name: 'Overdrive', mod: 10, description: 'Weapons Charged to maximum power', cost: 25 },
  burst: { name: 'Maxim Burst', mod: 20, description: 'Ultimate Weapon is ready to go', cost: 50 }
}
let x = ''
let modifier = 0
let z = boss.turn

function useaction() {

  update()

  switch (x) {
    case 'pierce':

      if (z >= boss.turn) {
        z = z - 3
        update()
        return actions.piercing.mod
        break;
      }
      else {

        return z = z + 2, 0
      }
    case 'drive':

      if (z >= boss.turn) {
        z = z - 4
        return actions.overdrive.mod
        break;
      }
      else {

        return z = z + 2, 0
      }
    case 'burst':
      if (z >= boss.turn) {
        z = z - 5
        return actions.burst.mod
      }
      else {

        return z = z + 2, 0
      }
    default:
      return 0

  }

}



//have boss inflict damage based on a random # + modifier
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
  let ttldmg = player.stursa.laserdmg + modifier
  boss.health = (boss.health - ttldmg)
  boss.turn = (boss.turn + 1)

  return boss.health,
    boss.turn,
    update()
}
function missle() {

  let modifier = useaction()

  let ttldmg = player.stursa.missledmg + modifier
  boss.health = (boss.health - ttldmg)
  boss.turn = (boss.turn + 1)
  return boss.health,
    boss.turn,
    update()
}
function barrage() {
  let modifier = useaction()

  let ttldmg = player.stursa.barragedmg + modifier
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

  if (z >= boss.turn) {
    document.getElementById("actions").textContent = "Ship's flux shifter is ready for action"
  }
  else {
    document.getElementById("actions").textContent = "Ship's flux shifter on cooldown"
  }
  document.getElementById("currentmod").textContent = x

  return document.getElementById('bosshealth').innerText = n,
    document.getElementById('bossname').innerText = boss.name,
    document.getElementById('hits').innerText = y
}


update()