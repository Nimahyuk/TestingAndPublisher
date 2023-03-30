import Gasto from "./gasto";

const ListarGastos = ({ gastosFiltrados, eliminarGasto }) => {
  return (
    <>
      {gastosFiltrados.map((gasto) => {
        return (
          <Gasto key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} />
        );
      })}
    </>
  );
};

export default ListarGastos;
