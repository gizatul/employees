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
        {name: 'Alex Miller', salary: 900, increase: false, rise: false, id: 2},
        {name: 'Tony Brown', salary: 1000, increase: false, rise: false, id: 3},
      ]
    }
    this.maxId = 4;
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
          data: newArr
        }
      });
    }
  }
  //Ф-я тоггла премии
  // onToggleIncrease = (targetId) => {
  //   // 1-й способ
  //   // this.setState(({data}) => { //меняем состояние наших данных
  //   //   const index = data.findIndex(elem => elem.id === targetId); //получаем индекс изменяемого объекта
  //   //   const old = data[index]; //промежуточный старый наш изменяемый объект
  //   //   const newItem = {...old, increase: !old.increase} //1. развернутый объект old - уже новый объект //2. increase заменяет старый increase и присваивает противоположное значение от old.increase
  //   //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; //формируем новый измененный массив данных
  //   //   return {
  //   //     data: newArr,
  //   //   }
  //   // });

  //   //2-й способ
  //   this.setState(({data}) => ({ //меняем состояние наших данных
  //     data: data.map(item => { //map возвращает новый массив ч/з cb-ф-ю далее
  //       if (item.id === targetId) { //если совпали id
  //         return {...item, increase: !item.increase} //nj возврат объекта,кот-й содержит старые св-ва и противоположный increase
  //       }
  //       return item; //если условие не совпало то просто возврат объекта
  //     })
  //   }));
  // }
//Ф-я тоггла звездочки
  // onToggleRise = (targetId) => { //переключение состояние сотрудника, на звездочку
  //   this.setState(({data}) => ({ //меняем состояние наших данных
  //     data: data.map(item => { //map возвращает новый массив ч/з cb-ф-ю далее
  //       if (item.id === targetId) { //если совпали id
  //         return {...item, rise: !item.rise} //nj возврат объекта,кот-й содержит старые св-ва и противоположный increase
  //       }
  //       return item; //если условие не совпало то просто возврат объекта
  //     })
  //   }));
  // }

  //Пример оптимизации кода (объединения) onToggleIncrease и onToggleRise
  onToggleProp = (targetId, prop) => {
    this.setState(({data}) => ({ //меняем состояние наших данных //Запись (({data}) => ({}) Это тоже самое, что и (({data}) => {return {}}. То есть внутри мы возвращаем объект, но используем еще одну пару {} и return. 
      data: data.map(item => { //map возвращает новый массив ч/з cb-ф-ю далее
        if (item.id === targetId) { //если совпали id
          return {...item, [prop]: !item[prop]} //nj возврат объекта,кот-й содержит старые св-ва и противоположный increase //[prop] - позволяет в ключ объекта динамические помещать другие сущности.
        }
        return item; //если условие не совпало то просто возврат объекта
      })
    }));
  }


  render () {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length; //возвращаем кол-во объектов с increase = true

    return (
      <div className="app">
        <AppInfo
          empNum={employees}
          incNum={increased}/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm onAdd={this.addItem}/> {/*Данные идут из employees ч/з onAdd в addItem */}
      </div>
    )
  }
}

export default App;