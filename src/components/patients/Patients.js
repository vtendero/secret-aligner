import PatientDetail from './PatientDetail';
import PatientsNavigator from '../navigator/PatientsNavigator';
import '../../styles/patients/Patients.scss';

const Patients = (props) => {
    const patientItem = Object.entries(props.patients).map(([id, patient]) => {
        return (
            <li key={id} className='patients__patientList--item'>
                <PatientDetail patient={patient}/>
            </li>
        )
    })

    return (
        <main className='main'>
            <PatientsNavigator 
                nameFilter={props.nameFilter}
                handleFilter={props.handleFilter}
            />
            <section className='patients'>
            <ul className='patients__header'>
                    <li className='patients__header--item'>Nombre y Apellidos
                        <button className='patients__header--itemButton'>
                            <i className='fas fa-chevron-up'></i>
                            <i className='fas fa-chevron-down'></i>
                        </button>
                    </li>
                    <li className='patients__header--item'>Clínica
                        <button className='patients__header--itemButton'>
                            <i className='fas fa-chevron-up'></i>
                            <i className='fas fa-chevron-down'></i>
                        </button>
                    </li>
                    <li className='patients__header--item'>Objetivo
                        <button className='patients__header--itemButton'>
                            <i className='fas fa-chevron-up'></i>
                            <i className='fas fa-chevron-down'></i>
                        </button>
                    </li>
                    <li className='patients__header--item'>Distribuidor
                        <button className='patients__header--itemButton'>
                            <i className='fas fa-chevron-up'></i>
                            <i className='fas fa-chevron-down'></i>
                        </button>
                    </li>
                    <li className='patients__header--item'>Estado
                        <button className='patients__header--itemButton'>
                            <i className='fas fa-chevron-up'></i>
                            <i className='fas fa-chevron-down'></i>
                        </button>
                    </li>
                    <li className='patients__header--item'>Acciones</li>
            </ul>

                <ul className='patients__patientList'>
                    {patientItem}
                </ul>
            </section>
        </main>
    )
}

export default Patients;