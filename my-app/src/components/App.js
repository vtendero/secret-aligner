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
  
    return (
      <>
        <Header />
        <Patients 
          patients={data}
          nameFilter={nameFilter}
          handleFilter={handleFilter}
        />
      </>
    );
}

export default App;
