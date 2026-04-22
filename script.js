let skills = {
  html: { xp: 0, level: 1 },
  js: { xp: 0, level: 1 },
  css: { xp: 0, level: 1 }
};

// carregar dados
let dadosSalvos = localStorage.getItem("skills");
if (dadosSalvos) {
  skills = JSON.parse(dadosSalvos);
}

// atualizar tela
function atualizarTela() {
  for (let skill in skills) {
    document.getElementById(skill + "Barra").style.width = skills[skill].xp + "%";
    document.getElementById(skill + "Porcentagem").innerText = skills[skill].xp + "%";
    document.getElementById(skill + "Level").innerText = "Level: " + skills[skill].level;
  }
}

// botão
function ganharXP(skill) {
  skills[skill].xp += 10;

  if (skills[skill].xp >= 100) {
    skills[skill].xp -= 100;
    skills[skill].level++;
    alert("Level UP em " + skill.toUpperCase() + " 🚀");
  }

  localStorage.setItem("skills", JSON.stringify(skills));

  atualizarTela();
}

// roda quando abre o site
atualizarTela();