import '../../styles/patients/ActionSelector.scss';

const ActionSelector = () => {
    return (
        <form className='actions'>
            <select className='actions__select' name='actions' id='actions'>
                <option hidden selected disabled>Acciones</option>
                <option value='Edit'>Editar</option>
                <option value='Finish'>Finalizar</option>
                <option value='Delete'>Borrar</option>
            </select>
        </form>
    )
}

export default ActionSelector;