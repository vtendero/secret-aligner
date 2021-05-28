import '../../styles/navigator/FilterByName.scss';

const FilterByName = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className='filterByName'>
            <form className='filterByName__form' onSubmit={handleOnSubmit}>
                <i className='filterByName__form--icon fas fa-search'></i>
                <input 
                    className='filterByName__form--input' 
                    type='text'
                    value={props.nameFilter}
                    placeholder='Buscar...'
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default FilterByName;