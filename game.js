let boss = {
  health: 200,
  name: 'Uknar the Life Drainer',
  turn: 0,
  atkmod: 1
}
let player = {
  stursa: {
    name: 'Stursa', health: 150, laserdmg: 2, missledmg: 6, barragedmg: 10, Energy: 200
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

function start() {
  document.getElementById('startbutton').innerHTML = `
  <audio autoplay=true>
      <source src="Steamtech-Mayhem.mp3" type="audio/mpeg">
    </audio>


  <div class="row  text-center justify-content-center">
  <div class="col-12" ><img id="uknar" src="uknar the life drainer.gif" alt="Uknar"></div>
   </div>
   <div class="row justify-content-center"><div class="col-12"><br></div></div>
   <div class="row justify-content-center text-center">
   <div class="col-8 justify-content-center"><img id="stursa" src="Stursa.gif" alt="Players ship">
   <div class="row  text-center justify-content-center atkoptions" id="final">
   <div class=" col-12 col-md-3 stats">
   <Span>
   <span id="bossname">--</span>
   <br> Health: <Span id="bosshealth">--</Span>
   <br>Turn:<span id="hits">--</span>
   </Span>
   </div>
   <div class="col-12 col-md-6"><div class="row text-center">
   <div class="col-12" id="actions"> Actions</div>
   
   <div class="col-12 col-md-6"><button type="button" class="btn btn-dark" onclick="return x= \'pierce\',update()">Piercing</button><br></div>
   
   <div class="col-12 col-md-6"><button type="button" class="btn btn-dark" onclick="return x=\'drive\',update()">Overdrive</button><br></div>

<div class="col-12"><br></div>

   <div class="col-12 col-md-6"><button type="button" class="btn btn-dark" onclick="return x=\'burst\',update()">Burst</button><br></div>
   
      <div class="col-12 col-md-6"><button type="button" class="btn btn-dark" onclick="return x='',update()">Flux off</button><br></div>
   </div><br>
   <div class="row"><div class="col-12" id="atkalert"> Attacks</div>

   <div class="col-12 col-md-4"><button type="button" class="btn btn-dark" onclick="laser()">AER Laser</button></div>
   
   <div class=" col-12 col-md-4"><button type="button" class="btn btn-dark" onclick="missle()">Missle</button></div>
   
   <div class="col-12 col-md-4"><button type="button" class="btn btn-dark" onclick="barrage()">Barrage</button></div></div></div>
   
   <div class="col-12 col-md-3"><span>Player 1 <br>Health: <span id="playerhealth"> --</span> <br>Energy: <span id="playerenergy">--</span> <br><span> Flux Mod: <span id="currentmod">--</span></span></span>
   
   </div></div></div></div>`;

  update()
}


function useaction() {

  update()

  switch (x) {
    case 'pierce':

      if (z >= boss.turn) {
        z = z - 3

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
      if (z == boss.turn) {

        z = (z + 1)
        return 0
      }
      else {
        z = (z + 2)
        return 0
      }
  }

}



//have boss inflict damage based on a random # + modifier
function bossaction() {
  let dmg = boss.atkmod + (Math.floor(Math.random() * (5 - 0 + 1)))

  player.stursa.health = (player.stursa.health - dmg)

  update()

}

function healthcheck() {
  if (boss.health <= 0) {
    boss.health = 0
    document.getElementById('final').innerHTML = `
    <div class="row justify-content-center text-center">
    <div class='col-12'> <h1 class="loss"> VICTORY! </h1>
    <br>
    Turns taken:${boss.turn}
    <br>
    <br>
    <button type="button" class="btn btn-secondary" value="Refresh Page" onclick="window.location.reload()"> Play Again?</button>
    </div></div>
    `
    document.getElementById('uknar').setAttribute('src', 'explosion.gif')
  }
  if (player.stursa.Energy > 200) {
    player.stursa.Energy = 200
  }
  if (player.stursa.health <= 0) {
    player.stursa.health = 0
    document.getElementById('final').innerHTML = `
    <div class="row justify-content-center text-center">
    <div class='col-12'> <h1 class="loss"> GAME OVER </h1>
    <br>
    Turns survived:${boss.turn}
    <br>
    <button type="button" class="btn btn-secondary" value="Refresh Page" onclick="window.location.reload()"> Play Again?</button>
    </div></div>
    `
    document.getElementById('stursa').setAttribute('src', 'explosion.gif')
  }
  return boss.health, player.stursa.Energy
}

function laser() {
  let modifier = useaction()
  let ttldmg = player.stursa.laserdmg + modifier
  boss.health = (boss.health - ttldmg)
  boss.turn = (boss.turn + 1)
  player.stursa.Energy = (player.stursa.Energy + 5)
  bossaction()
  return boss.health,
    boss.turn, player.stursa.Energy

}
function missle() {


  if (player.stursa.Energy >= 20) {
    let modifier = useaction()

    let ttldmg = player.stursa.missledmg + modifier
    boss.health = (boss.health - ttldmg)
    boss.turn = (boss.turn + 1)
    player.stursa.Energy = (player.stursa.Energy - 20)

    bossaction()
    return boss.health,
      boss.turn, player.stursa.Energy
  }
  else {
    document.getElementById("atkalert").innerText = 'Energy levels too low'
  }
  update()
}
function barrage() {

  if (player.stursa.Energy >= 30) {

    let modifier = useaction()
    let ttldmg = player.stursa.barragedmg + modifier
    boss.health = (boss.health - ttldmg)
    boss.turn = (boss.turn + 1)
    player.stursa.Energy = (player.stursa.Energy - 30)

    bossaction()
    return boss.health,
      boss.turn, player.stursa.Energy
  }
  else {
    document.getElementById("atkalert").innerText = 'Energy levels too low'
  }
  update()
}
function update() {
  healthcheck()

  let n = boss.health.toString()
  let y = boss.turn.toString()
  let e = player.stursa.Energy.toString()
  let p1hp = player.stursa.health.toString()
  if (z >= boss.turn) {
    document.getElementById("actions").textContent = "Ship's flux shifter is ready for action"
  }
  else {
    document.getElementById("actions").textContent = "Ship's flux shifter on cooldown"
  }
  return document.getElementById("currentmod").textContent = x,
    document.getElementById('playerenergy').innerText = e,
    document.getElementById('bosshealth').innerText = n,
    document.getElementById('bossname').innerText = boss.name,
    document.getElementById('hits').innerText = y,
    document.getElementById('playerhealth').innerText = p1hp
}


