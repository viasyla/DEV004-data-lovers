// Ejemplo de datos de prueba para la función "buscarPorNombre"
const infoAtletas = [
  { name: 'Giovanni Abagnale', deporte: 'natación' },
  { name: 'Luc Abalo', deporte: 'atletismo' },
  { name: 'Saeid Morad Abdevali', deporte: 'gimnasia' },
  { name: 'Patimat', deporte: 'atletismo' },
];

// Función simulada para la dependencia "buscarNombre"
function buscarNombre(infoAtletas, nombre) {
  return infoAtletas.filter(atleta => atleta.nombre.includes(nombre));
}

// Función simulada para la dependencia "printCards"
function printCards(personas) {
  console.log(personas);
}

// Test para la función "buscarPorNombre"
describe('buscarPorNombre', () => {
  it('debería llamar a "buscarNombre" con el valor del evento y llamar a "printCards" con el resultado', () => {
    const spyBuscarNombre = jest.spyOn(window, 'buscarNombre');
    const spyPrintCards = jest.spyOn(window, 'printCards');

    const event = { target: { value: 'a' } };
    spyBuscarNombre(event);

    expect(spyBuscarNombre).toHaveBeenCalledWith(infoAtletas, 'a');
    expect(spyPrintCards).toHaveBeenCalledWith([
      { nombre: 'Maria', deporte: 'gimnasia' },
      { nombre: 'Ana', deporte: 'atletismo' },
    ]);

    spyBuscarNombre.mockRestore();
    spyPrintCards.mockRestore();
  });
});