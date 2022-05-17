

let viaje = prompt("cuanto podes gastar?")


if (viaje <= 10000 && viaje > 8000 ){
    alert("viaja a vcp")
}
else if (viaje <= 20000 && viaje > 10001 ){
    alert("viaja a fiestas de disfraces")
}
else if (viaje <= 30000 && viaje > 20001 ){
    alert("viaja a brasil")
}
else if (viaje <= 00000 && viaje > 7999 )
    alert("No tiene dinero suficiente para viajar")


let  descripcion = {
    nombre: "Mirco",
    apellido: "Fermani",
    direccion: "Suipacha1376",
    pais: "Argentina"
};


let nombre = descripcion["nombre"];
let apellido = descripcion["apellido"];
let direccion = descripcion["direccion"];
let pais = descripcion["pais"];


frase = `mi nombre es: ${nombre} <br>
        mi apellido es: ${apellido}<br>
        vivo en: ${direccion}<br>
        en: ${pais}<br>`;


console.log(frase);

function buclefor(num) {
    for (let i=0; i<num;  i++) {
        console.log(i);
    }
}
buclefor(11);


let destinos = ["Mendoza","Santa Fe","Rosario"]


for (dest of destinos){
    console.log(dest + "<br>");
}


document.addEventListener("DOMContentLoaled", () => {
    console.log("el documento se cargo correctamente");
    
});


const form = document.querySelector("#formularioo");
const enviarformulario = (event) => {
    event.preventDefault();
    console.log(event.target.name, event.target.email, event.target.password,);

};
form.addEventListener("submit", enviarformulario);



var rellax = new Rellax('.rellax');