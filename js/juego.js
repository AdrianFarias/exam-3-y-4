
let elec = prompt("escribe piedra, papel o tijera").toLowerCase();
let opcion = ['piedra', 'papel', 'tijera'];
let resul = opcion[Math.floor(Math.random() * 3 )];


console.log("tu rival escogió " + resul);

  if (elec === resul) {
    console.log("empate");
} else if (
 (elec === 'piedra' && resul === 'tijera') ||
 (elec === 'papel' && resul === 'piedra') ||
 (elec === 'tijera' && resul === 'papel')
) {
  console.log("ganaste");
} else {
  console.log("perdiste"); 
 }