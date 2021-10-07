import FilterByName from './FilterByName';
import ButtonNewPatient from './ButtonNewPatient';
import ButtonDownloadFile from './ButtonDownloadFile';
import Display from './Display';
import '../../styles/navigator/PatientsNavigator.scss';

const PatientsNavigator = (props) => {
    return (
        <section className='patientsNavigator'>

            <FilterByName 
                handleFilter={props.handleFilter} 
                nameFilter={props.nameFilter}
            />

            <div className='patientsNavigator__headline'>
                <i className='patientsNavigator__headline--icon far fa-address-card'></i>
                
                <div className='patientsNavigator__headline--description'>
                    <h2 className='patientsNavigator__headline--title'>
                        Listado de pacientes</h2>
                    <p className='patientsNavigator__headline--text'>
                        Visualización de pacientes</p>
                </div>
            </div>

            <div className='patientsNavigator__buttons'>
                <ButtonNewPatient handleNewPatient={props.handleNewPatient}/>
                <ButtonDownloadFile patients={props.patients} />
            </div>

            <div className='patientsNavigator__display'>
                <Display />
            </div>

            

        </section>
    )   
}

export default PatientsNavigator;