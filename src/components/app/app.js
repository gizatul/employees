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
        {name: 'John Smith', salary: 800, increase: true, rise: true, id: 1},
        {name: 'Alex Miller', salary: 1000, increase: false, rise: false, id: 2},
        {name: 'Tony Brown', salary: 1200, increase: false, rise: false, id: 3},
      ],
      term: '', 
      filter: 'all',
    }
    this.maxId = 4;
  }

  deleteItem = (idDeleteItem) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== idDeleteItem), 
      }
    });
  }

  addItem = (name, salary) => {
    if (name.length > 1 && salary.length > 0) {
      const newItem = {
        name,
        salary,
        increase: false,
        rise: false,  
        id: this.maxId++,
      }
      this.setState(({data}) => {
        const newArr =[...data, newItem];
        return {
          data: newArr,
        }
      });
    }
  }
  
  onToggleProp = (targetId, prop) => {
    this.setState(({data}) => ({ 
      data: data.map(item => { 
        if (item.id === targetId) { 
          return {...item, [prop]: !item[prop]} 
        }
        return item; 
      })
    }));
  }

  filterList = (items, filter) => {
    switch (filter) {
      case 'rise': 
        return items.filter(item => item.rise);
      case 'over1000':
        return items.filter(item => item.salary > 1000);
      default: 
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  searchEmp = (items, term) => { 
    if (term.length === 0) { 
      return items;
    }
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term})
  }
  
  onChangeSalary = (newSalary, name) => {
    this.setState(({data}) => ({
      data: data.map(person => {
        if(person.name === name) {
          return {...person, salary: newSalary.replace(/[^0-9]/g, '')}
        }
        return person;
      })
    }))
  }

  render () {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length; 
    const {data, term, filter} = this.state;
    const visibleData = this.filterList(this.searchEmp(data, term), filter); 

    return (
      <div className="app">
        <AppInfo
          empNum={employees}
          incNum={increased}/>
        <div className="search-panel">
          <SearchPanel 
            onUpdateSearch = {this.onUpdateSearch}/>
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;