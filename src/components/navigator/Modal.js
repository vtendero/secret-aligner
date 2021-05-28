import '../../styles/navigator/Modal.scss'

const Modal = (props) => {

    const handleOnClick = () => {
        props.handleModalClose();
    }

    return (
        <div className='modal'>
            <form method='post' className='modal__form'>
                <label>Nombre</label>
                <input type='text' name='nombre' placeholder='nombre'/>
                <label>Apellidos</label>
                <input type='text' name='apellidos' placeholder='apellidos'/>
                <label>Fecha de nacimiento</label>
                <input type='date'  name='date' />
                <span>
                    <label>Sexo</label>
                    <input type='radio' name='gender' value='femenino'/>
                    <label>Femenino</label>
                    <input type='radio' name='gender' value='masculino'/>
                    <label>Masculino</label>
                </span>
                <label>Clínica</label>
                <input type='text' name='clinica' placeholder='clinica'/>
                <label>Recorte Alineadores</label>
                <div>
                    <input type='checkbox' name='alineadores' value='Recortar dejando 1-3 mm de encía'/>
                    <label>Recortar dejando 1-3 mm de encía</label>
                    <input type='checkbox' name='alineadores' value='Recortar a nivel de los cuellos'/>
                    <label>Recortar a nivel de los cuellos</label>
                </div>
                <div>
                    <label>¿Secret Retainer?</label>
                    <input type='checkbox' name='secret-retainer' value='sí'/>
                    <label>SÍ</label>
                    <input type='checkbox' name='secret-retainer' value='no'/>
                    <label>NO</label>
                </div>
            </form>

            <div className='modal__buttons'>
                <button className='modal__buttons--item' onClick={handleOnClick}>Cancelar</button>
                <button className='modal__buttons--item'>Limpiar</button>
                <button className='modal__buttons--item'>Guardar</button>
            </div>
        </div>
    )
}

export default Modal;