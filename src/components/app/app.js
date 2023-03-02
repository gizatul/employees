import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John Smith', salary: 800, increase: true, id: 1},
        {name: 'Alex Miller', salary: 900, increase: false, id: 2},
        {name: 'Tony Brown', salary: 1000, increase: false, id: 3},
      ]
    }
  }

  deleteItem = (idDeleteItem) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === idDeleteItem); //elem - каждый элемент по порядку(в данном случае {name: ..., salary: ..., increase: ..., id: ..}) // возврат индекса на котором найден элемент

      // const before = data.slice(0, index); //отрезаем с первого до нужного объекта
      // const after = data.slice(index + 1); //отрезаем с последующего элемента после index и до конца
      // const newArr = [...before, ...after];

      return {
        data: data.filter(item => item.id !== idDeleteItem), 
      }
    });
  }

  render () {
    return (
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployeesList 
        data={this.state.data}
        onDelete={this.deleteItem}/>
        <EmployeesAddForm/>
      </div>
    )
  }
}

export default App;