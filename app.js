
//llamo al archivo frutas y lo guardo en una constante

//destrucury
const {frutas, dinero} = require('./frutas')

//requerir el paquete cowsay
const cowsay = require("cowsay");

console.log(cowsay.say({
	text : "esto es cowsay",
	e : "oO",
	T : "U "
}));



frutas.forEach((fruta) => {
  //count nos muestra los elementos repetidos
  console.count(fruta);
});

console.log("mi dinero actual: ", dinero);
