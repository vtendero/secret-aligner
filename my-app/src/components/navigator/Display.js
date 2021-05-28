import '../../styles/navigator/Display.scss';

const Display = () => {
    return (
        <div className='display'>
            <div className='display__viewingMode'>
                <i className='display__viewingMode--icon fas fa-bars' title='Ver en formato lista'></i>
                <i className='display__viewingMode--icon fas fa-table' title='Ver en formato tarjeta'></i>
            </div>

            <ul className='display__itemsPerPage'>
                <li className='display__itemsPerPage--item'>5</li>
                <li className='display__itemsPerPage--item'>10</li>
                <li className='display__itemsPerPage--item'>15</li>
            </ul>
        </div>
    )
}

export default Display;