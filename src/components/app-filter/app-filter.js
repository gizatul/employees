import './app-filter.css';

const AppFilter = (props) => {
    
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'Сотрудники на повышение'},
    {name: 'over1000', label: 'З/П больше 1000 долларов'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name; 
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button className={`btn ${clazz}`}
              type="button"
              onClick={() => props.onFilterSelect(name)}
              key={name}>
              {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;