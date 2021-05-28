// eslint-disable-next-line
import React, {useState} from 'react';
import Header from './Header';
import Patients from './Patients';
import patients from '../data/pacientes.json';

const App = () => {
 const [data, setData] = useState(patients);

    return (
      <>
        <Header />
        <main className='main'>
          <Patients patients= {data} />
        </main>
      </>
    );
}

export default App;
