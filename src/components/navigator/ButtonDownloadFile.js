import '../../styles/navigator/ButtonDownloadFile.scss'

const ButtonDownloadFile = (props) => {

    const handleOnClick = () => {
        console.log('click');
    }

    return (
        <>
            <button className='buttonDownloadFile' title='Descargar CSV' 
            onClick={handleOnClick}>
                <i className='buttonDownloadFile__icon fas fa-file-download'></i>
                Descargar CSV
            </button>
      </>
    )
}

export default ButtonDownloadFile;