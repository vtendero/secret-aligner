import React, {useState} from 'react';
import Header from './Header';
import Patients from '../components/patients/Patients';
import Modal from '../components/navigator/Modal';
import patients from '../data/pacientes.json';

const App = () => {
 const [data] = useState(patients);
 const [nameFilter, setNameFilter] = useState('');
 const [modalOpen, setModalOpen] = useState(false);

  const handleFilter = (data) => {
   if (data.key === 'name') {
     setNameFilter(data.value);
    }
  }

  const filteredPatients = Object.entries(data)
    .filter(([id, patient]) => {
      return patient.datos_paciente.nombre.toUpperCase().includes(nameFilter.toUpperCase()) || patient.datos_paciente.apellidos.toUpperCase().includes(nameFilter.toUpperCase());
    })
  
  const handleNewPatient = () => {
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }
    return (
      <>
        <Header />
        {modalOpen ? <Modal handleModalClose={handleModalClose}/> : ''}
        <Patients
          patients={filteredPatients}
          nameFilter={nameFilter}
          handleFilter={handleFilter}
          handleNewPatient={handleNewPatient}
        />
      </>
    );
}

export default App;
