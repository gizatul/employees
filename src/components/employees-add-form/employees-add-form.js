import './employees-add-form.scss';
import { Component } from 'react';

class EmployeesAddForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
        name: '', 
        salary: '',
    }
  }   

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  onSubmit = (e) => {
    e.preventDefault(); 
    this.props.onAdd(this.state.name, this.state.salary); 
    this.setState({
      name: '', 
      salary: '',
    });
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex flex-wrap"
          onSubmit={this.onSubmit}>
          <input required type="text"
            className="form-control new-post-label mt-1"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}/>
          <input required type="number"
            className="form-control new-post-label mt-1"
            placeholder="З/П в $?"
            name="salary" 
            value={salary}
            onChange={this.onValueChange}/>
          <button type="submit"
            className="btn btn-outline-light mt-1">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;