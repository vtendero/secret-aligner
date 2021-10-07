import '../../styles/navigator/ButtonDownloadFile.scss'
import { CSVLink } from "react-csv";

const ButtonDownloadFile = (props) => {
    const data = Object.values(props.patients).map(([id, patient]) => {
        console.log(patient);
        return patient;
    })

const headers = [
  {label: 'Nombre', key:'datos_paciente.nombre'},
  {label: 'Apellidos', key:'datos_paciente.apellidos'},
  {label: 'Clinica', key:'ficha_dental.clinica'},
  {label: 'Objetivo', key:'ficha_dental.objetivo_tratamiento'},
  {label: 'Estado', key:'ficha_dental.estado'},
];

const csvData = {
    headers: headers,
    data: data,
}
    
    return (
        <CSVLink {...csvData} filename='ListadoPaciente.csv'>
            <button className='buttonDownloadFile' title='Descargar CSV' >
                <i className='buttonDownloadFile__icon fas fa-file-download'></i>
                Descargar CSV
            </button>
        </CSVLink>
    )
}

export default ButtonDownloadFile;