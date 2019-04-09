var frases = [
    "Sim, provavelmente.",
    "Minha resposta é não.",
    "Talvez, quem sabe.",
    "Primeiro, veja se não está sendo seguido",
    "É mentira.",
    "É verdade esse bilhete.",
    "Pergunte para sua mãe.",
    "Não me encha de perguntas.",
    "Coma alguma coisa antes de decidir.",
    "Acho que deve ser sono.",
    "Concentre-se e pergunte novamente",
    "Isso é ótimo.",
    "Faz isso que é sucesso.",
    "Não é possível prever agora",
    "Hm... difícil.",
    "Mas é claro!",
    "Muito duvidoso.",
    "Minhas fontes dizem que não.",
    "Pergunte depois.",
    "Tente novamente.",
]

function sortearFrases() {
    var random = Math.floor (Math.random()*20);
    document.getElementById ('paragrafo').innerHTML = frases [random];
}