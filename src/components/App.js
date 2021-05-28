import React, {useState} from 'react';
import Header from './Header';
import Patients from '../components/patients/Patients';
import patients from '../data/pacientes.json';

const App = () => {
 const [data, setData] = useState(patients);
 const [nameFilter, setNameFilter] = useState('');

  const handleFilter = (data) => {
   if (data.key === 'name') {
     setNameFilter(data.value);
    }
  }

  const filteredPatients = Object.entries(data)
    .filter(([id, patient]) => {
      return patient.datos_paciente.nombre.toUpperCase().includes(nameFilter.toUpperCase()) || patient.datos_paciente.apellidos.toUpperCase().includes(nameFilter.toUpperCase());
    })
  
    return (
      <>
        <Header />
        <Patients 
          patients={filteredPatients}
          nameFilter={nameFilter}
          handleFilter={handleFilter}
        />
      </>
    );
}

export default App;
