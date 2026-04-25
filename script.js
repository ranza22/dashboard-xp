 HEAD

// SKILLS (XP)
 console.log("JS carregou")

 let skills = {
  html: { xp: 0, level: 1 },
  js: { xp: 0, level: 1 },
  css: { xp: 0, level: 1 }
}

// carregar do localStorage
let dadosSalvos = localStorage.getItem("skills")
if (dadosSalvos) {
  skills = JSON.parse(dadosSalvos)
}

// atualizar skills na tela
function atualizarSkills() {
  for (let skill in skills) {
    document.getElementById(skill + "Barra").style.width = skills[skill].xp + "%"
    document.getElementById(skill + "Porcentagem").innerText = skills[skill].xp + "%"
    document.getElementById(skill + "Level").innerText = "Level: " + skills[skill].level
  }
}

// ganhar XP
function ganharXP(skill) {
  skills[skill].xp += 10

  if (skills[skill].xp >= 100) {
    skills[skill].xp -= 100
    skills[skill].level++
    alert("Level UP em " + skill.toUpperCase() + " 🚀")
  }



    localStorage.setItem("skills", JSON.stringify(skills))
    atualizarSkills()
}



// CRONÔMETRO


let segundos = 0
let minutos = 0
let horas = 0

let intervalo = null
let rodando = false

function iniciar() {
  if (rodando) return

  rodando = true

  intervalo = setInterval(function () {
    segundos++

    if (segundos === 60) {
      segundos = 0
      minutos++
    }

    if (minutos === 60) {
      minutos = 0
      horas++
    }

    atualizarTempo()
  }, 1000)
}

function parar() {
  clearInterval(intervalo)
  rodando = false
}

// atualizar tempo na tela
function atualizarTempo() {
  document.getElementById("tempo").innerText =
    formatar(horas) + ":" +
    formatar(minutos) + ":" +
    formatar(segundos)
}

// formatar 01, 02, 03...
function formatar(valor) {
  return valor < 10 ? "0" + valor : valor
}



//  BOTÕES
console.log(document.getElementById("btnIniciar"))

//  INICIALIZAÇÃO {
window.onload = function() {
  atualizarSkills()
  atualizarTempo()

  document.getElementById("btnIniciar").addEventListener("click", iniciar)
  document.getElementById("btnParar").addEventListener("click", parar)
}



 