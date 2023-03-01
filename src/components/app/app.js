import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App(){

  const data = [
    {name: 'John Smith', salary: 800, increase: true},
    {name: 'Alex Miller', salary: 900, increase: false},
    {name: 'Tony Brown', salary: 1000, increase: false},
  ];

  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  )
}
export default App;