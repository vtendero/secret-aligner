import '../../styles/navigator/ButtonNewPatient.scss'

const ButtonNewPatient = () => {
    return (
        <button className='buttonNewPatient' title='Agregar nuevo paciente'>
            <i className='buttonNewPatient__icon fas fa-plus'></i>
            Nuevo Paciente
        </button>
    )
}

export default ButtonNewPatient;