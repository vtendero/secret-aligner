import PatientDetail from './PatientDetail';

const Patients = (props) => {
    const patientItem = Object.entries(props.patients).map(([id, patient]) => {
        return (
            <li key={id} className='patients__patientList--item'>
                <PatientDetail patient={patient}/>
            </li>
        )
    })

    return (
        <section className='patients'>
           <ul className='patients__header'>
                <li className='patients__header--item'>Nombre y Apellidos</li>
                <li className='patients__header--item'>Clínica</li>
                <li className='patients__header--item'>Objetivo</li>
                <li className='patients__header--item'>Distribuidor</li>
                <li className='patients__header--item'>Estado</li>
                <li className='patients__header--item'>Acciones</li>
           </ul>

            <ul className='patients__patientList'>
                {patientItem}
            </ul>
        </section>
       
    )
}

export default Patients;