const PatientDetail = (props) => {
    return (
        <div className='patientDetail'>
            <span className='patientDetail__personal'>
                <img className='patientDetail__personal--image' src='' alt={`Foto de ${props.patient.datos_paciente.nombre + ' ' + props.patient.datos_paciente.apellidos}`}/>
                <div className='patientDetail__personal--containerName'>
                    <h4 className='patientDetail__personal--name'>{props.patient.datos_paciente.nombre + ' ' + props.patient.datos_paciente.apellidos}</h4>
                    <h5 className='patientDetail__personal--date'> 
                        <i class='far fa-calendar-alt'></i> {props.patient.datos_paciente.fecha_nacimiento}
                    </h5>
                </div>
            </span>
            <h4 className='patientDetail__clinic'>{props.patient.ficha_dental.clinica}</h4>
            <h4 className='patientDetail__goal'>{props.patient.ficha_dental.objetivo_tratamiento}</h4>
            <h4 className='patientDetail__distributor'>Secret Aligner</h4>
            <h4 className='patientDetail__status'>{props.patient.ficha_dental.estado}</h4>
            <button className='patientDetail__doings'>Acciones</button>
        </div>
    )
    
}

export default PatientDetail;