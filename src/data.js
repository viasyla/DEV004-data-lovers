//exporto la bbdd para nuscar por nombre
//la const debe ser igual a la de la importacion del main
//toLowerCase() : convierte la cadenaen minusculas
//includes() : devuelve true/false si el dato buscado esta en el array
export const buscarNombre = (infoAtletas, name) => { //name corresponde al nombre en la bbdd
  const nombreBuscado=infoAtletas.filter((atleta)=>atleta.name.toLowerCase().includes(name.toLowerCase()));
// console.log(nombreBuscado); 
  return nombreBuscado;
};
// Filtrar por Sexo //La var filtrarSexo se debe llevar al main.js y agregar en el import
export const filtrarSexo = (infoAtletas, gender) => {
  const resultadoSexo = infoAtletas.filter((atleta) => atleta.gender.toLowerCase() === gender.toLowerCase());
  return resultadoSexo;
};

// export const athetesPais = (infoAthetas, noc) => {
//   const namePais=infoAthetas.filter()
//   return 'example';
// };
