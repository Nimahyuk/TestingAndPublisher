import { useEffect, useState } from "react";
import DatosPresupuesto from "../components/datos-presupuesto";
import FiltrarGastos from "../components/filtrar-gastos";
import ListarGastos from "../components/listar-gastos";
import Modal from "../components/modal";
import NuevoGasto from "../components/nuevo-gasto";
import NuevoPresupuesto from "../components/nuevo-presupuesto";

const Presupuesto = () => {
  const [modal, setModal] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [totalGastos, setTotalGastos] = useState(0);
  const [disponible, setDisponible] = useState(0);

  useEffect(() => {
    setDisponible(presupuesto);
  }, [presupuesto]);

  useEffect(() => {
    let temporalGastos = 0;
    gastos.forEach((element) => {
      console.log(element.cantidad);
      temporalGastos = temporalGastos + Number(element.cantidad);
    });
    setTotalGastos(temporalGastos);
    setDisponible(presupuesto - temporalGastos);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const temporalGastos = gastos.filter((gasto) => {
        return filtro === gasto.categoria;
      });
      setGastosFiltrados(temporalGastos);
    } else {
      setGastosFiltrados(gastos);
    }
  }, [filtro, gastos]);

  const addGasto = (newGasto) => {
    setGastos([...gastos, newGasto]);
  };

  const eliminarGasto = (idGasto) => {
    const temporalGastos = gastos.filter((gasto) => {
      return gasto.id !== idGasto;
    });
    setGastos(temporalGastos);
  };

  return (
    <>
      <div className="header">
        <h1>Planificador de Gastos</h1>
        {presupuesto ? (
          <>
            <DatosPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              totalGastos={totalGastos}
              disponible={disponible}
              setGastos={setGastos}
            />
            <NuevoGasto setModal={setModal} />
          </>
        ) : (
          <NuevoPresupuesto setPresupuesto={setPresupuesto} />
        )}
      </div>

      {gastos.length > 0 && (
        <div className="gastosMain">
          <FiltrarGastos setFiltro={setFiltro} />
          <div className="listado-gastos contenedor">
            {gastosFiltrados.length > 0 ? (
              <h2>Gastos</h2>
            ) : (
              <h2>No hay gastos en esta categoría</h2>
            )}

            <ListarGastos gastosFiltrados={gastosFiltrados} eliminarGasto={eliminarGasto} />
            
          </div>
        </div>
      )}

      {modal && <Modal setModal={setModal} addGasto={addGasto} />}
    </>
  );
};

export default Presupuesto;
