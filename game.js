let boss = {
  health: 100,
  name: 'Galaga',
  hits: 0
}

function laser() {
  boss.health = (boss.health - 1)
  boss.hits = (boss.hits + 1)
  return boss.health,
    boss.hits,
    update()
}
function missle() {

  boss.health = (boss.health - 5)
  boss.hits = (boss.hits + 1)
  return boss.health,
    boss.hits,
    update()
}
function barrage() {
  boss.health = (boss.health - 10)
  boss.hits = (boss.hits + 1)
  return boss.health,
    boss.hits,

    update()
}
function update() {
  let n = boss.health.toString()
  let x = boss.hits.toString()

  return document.getElementById('bosshealth').innerText = n,
    document.getElementById('bossname').innerText = boss.name,
    document.getElementById('hits').innerText = x
}

update()