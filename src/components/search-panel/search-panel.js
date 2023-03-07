import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component {
  constructor (props) {
    super (props);
    this.state = {
      term: '', //2.локальное состояние,
    }
  }

  onValueChange = (e) => {
    const term = e.target.value;
    this.setState({term: term}); //1.установка локального состояния
    this.props.onUpdateSearch(term); //4.проброс наверх e.target.value(term) в app.js
  }

  render () {
    return (
      <input type="text" 
             className="form-control search-input"
             placeholder="Найти сотрудника"
             value={this.state.term} //3.устанавливаем значение из локального состояния
             onChange={this.onValueChange}/> //отслеживаем событие введения в поиск
    )
  }
}
export default SearchPanel;