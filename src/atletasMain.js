
//aqui se deben agregar las demas importaciones
import { buscarNombre,filtrarSexo } from './data.js'; //aqui se deben agregar las demas importaciones

import data from './data/athletes/athletes.js';// importo toda la bbdd desde atletas.js, que ya fue exportada desde el .json a js

//Declaracion de variables
const infoAtletas = data.athletes.slice(0,10);//esta var me muestra todos los datos de los atletas//Guardo los resultados de la data del js en una variable
const buscarNombrePersona=document.getElementById("busqueda");//asigno a var buscarNombreAtleta el input que se encuentra en html por medio del id"busqueda"
const seleccionarSexoAtleta=document.getElementById("sexo-filtrar"); //se coloca eñ id del select en html
//console.log(buscarNombre, data);

//Escucha de las acciones
buscarNombrePersona.addEventListener("keyup",buscarPorNombre);
seleccionarSexoAtleta.addEventListener("change",mostrarResultadosFiltrarSexo); //depuesde crear la funcion afredo el nombre de ella despues del change

// <!-- ** tarjetas  -->
//me traigo las datos de la bbdd y creo desde atletasMain.js items en el HTML para visualizarlos. 
function printCards(data) {
    document.getElementById("cards-container").innerHTML = data.map((item) =>
      ` <section class="box"> 
          <h3 class="nombre"> ${item.name}</h3>
            <div class="card-info"> 
            <p><strong>Sexo: </strong>${item.gender}</p>
            <p><strong>altura: </strong>${item.height}</p>
            <p><strong>peso: </strong>${item.weight}</p>
            <p><strong>disciplina: </strong>${item.sport}</p>
            <p><strong>grupo: </strong>${item.team}</p>
            <p><strong>pais: </strong>${item.noc}</p>
            <p><strong>edad: </strong>${item.age}</p>
            <p><strong>especialidad: </strong>${item.event}</p>
            <p><strong>medalla(s): </strong>${item.medal}.</p>  
          </div>
        </section>
      ` ).join('');
  }
  printCards(infoAtletas);
//*************************** */

// FUNCION BUSCAR NOMBRE DEL ATLETA EN BUSCADOR
function buscarPorNombre(event){
  const nombrePersona=buscarNombre(infoAtletas, event.target.value);
  printCards(nombrePersona);
}

// FUNCION FILTRAR SEXO ATLETA EN BOX BUSCADOR
function mostrarResultadosFiltrarSexo() {
  if (this.value === "F" || this.value === "M") {
    const valorSeleccionadoSexo = seleccionarSexoAtleta.value;//aqui se coloca el nombre dela const filtarSexoAtleta
    const seleccionSexo = filtrarSexo(infoAtletas, valorSeleccionadoSexo); // despues de asignar la variable,se debe asignar de impor filtrarSexo y pasar los valores de infoAtletas y valorSeleccionadoSexo
    printCards(seleccionSexo);
  }
  else {
    printCards(infoAtletas);
  }
}






