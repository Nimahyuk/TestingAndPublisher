import iconoNuevoGasto from "../img/nuevo-gasto.svg"

const NuevoGasto = ({setModal}) => {
    return (
        <div className="nuevo-gasto">
            <img onClick={()=> setModal(true)} data-testid="icono NuevoGasto" src={iconoNuevoGasto} alt="icono-nuevoGasto" />
        </div>
    )

}

export default NuevoGasto;