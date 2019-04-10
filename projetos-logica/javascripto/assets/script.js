var elogios = [
    "Zero defeitos",
    "Maquina de vencer",
    "Maravigold",
    "Bombomzinho",
    "Um neném",
    "Um broto",
    "Jóia rara",
    "Crystal",
    "Fada sensata",
    "Ícone incompreendido",
    "Universal",
    "Lacrador"
];

function elogiar (){
    var random = Math.floor(Math.random() * elogios.length)
    document.getElementById ("titulo").innerHTML = elogios [random];
}