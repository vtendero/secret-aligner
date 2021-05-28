import '../../styles/navigator/ButtonNewPatient.scss'


const ButtonNewPatient = (props) => {

    const handleOnClick = () => {
        props.handleNewPatient();
    }

    return (
        <>
        <button className='buttonNewPatient' title='Agregar nuevo paciente' onClick={handleOnClick}>
            <i className='buttonNewPatient__icon fas fa-plus'></i>
            Nuevo Paciente
        </button>
        </>
    )
}

export default ButtonNewPatient;