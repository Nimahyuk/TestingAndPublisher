import { useForm } from "react-hook-form";
import iconoCerrar from "../img/cerrar.svg"

const Modal = ({ setModal, addGasto }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleGasto = (data) => {
        data.fecha= Date.now() //fecha actual
        data.id= `${data.fecha}${data.nombreGasto}`
        
        addGasto(data)
        setModal(false)
    }

    return (

        <div className="modal">
            <div className="cerrar-modal">
                <img onClick={() => setModal(false)} src={iconoCerrar} alt="iconoCerrar" />
            </div>
            <form className="formulario" onSubmit={handleSubmit(handleGasto)}>
                <legend>Nuevo gasto</legend>
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input id="nombre" type="text" placeholder="añade nombre del gasto" {...register('nombreGasto', { required: true })} />
                    {errors.nombreGasto && <p className="alerta error">Nombre requerido</p>}
                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input type="number" placeholder="añadir cantidad" {...register('cantidad', { required: true })} />
                    {errors.cantidad && <p className="alerta error">Cantidad requerido</p>}
                </div>
                <div className="campo">
                    <label>Categoría</label>
                    <select id="categoria" {...register('categoria', { required: true })} >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                    {errors.categoria && <p className="alerta error">Seleccione una categoría.</p>}
                </div>
                <button type="submit">Añadir</button>
            </form>

        </div>
    )
}

export default Modal;