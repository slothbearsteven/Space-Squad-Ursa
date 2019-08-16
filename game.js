let boss = {
  health: 100,
  name: 'Galaga',
  hits: 0,
  items: []
}
let actions = {
  piercing: { name: 'Pierce', mod: 1, description: 'Weapons modified to pierce hull\'s shields' },
  overdrive: { name: 'Overdrive', mod: 5, description: 'Weapons Charged to maximum power' },
  burst: { name: 'Maxim Burst', mod: 10, description: 'Ultimate Weapon is ready to go' }
}
let x = ''
let modifier = 0

function useaction() {

  switch (x) {
    case 'pierce':
      return actions.piercing.mod
      break;
    case 'drive':

      return actions.overdrive.mod
      break;
    case 'burst':
      return actions.burst.mod
      break;
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
  boss.hits = (boss.hits + 1)

  return boss.health,
    boss.hits,
    update()
}
function missle() {

  let modifier = useaction()
  let ttldmg = 5 + modifier
  boss.health = (boss.health - ttldmg)
  boss.hits = (boss.hits + 1)

  return boss.health,
    boss.hits,
    update()
}
function barrage() {
  let modifier = useaction()
  let ttldmg = 10 + modifier
  boss.health = (boss.health - ttldmg)
  boss.hits = (boss.hits + 1)

  return boss.health,
    boss.hits,

    update()
}
function update() {
  healthcheck()

  let n = boss.health.toString()
  let y = boss.hits.toString()

  return document.getElementById('bosshealth').innerText = n,
    document.getElementById('bossname').innerText = boss.name,
    document.getElementById('hits').innerText = y
}

update()