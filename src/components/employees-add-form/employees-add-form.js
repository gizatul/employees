import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '', //название в верстке должны совпасть с state
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //c помощью e.target.name можно достучаться до элемента на котором происходит событие //записываем св-во в объект
        })
    }

    onSubmit = (e) => {
        e.preventDefault(); //сброс станд. настроек
        this.props.onAdd(this.state.name, this.state.salary); //данные полученные из верстки из пропсов name(this.state.name) и salary(this.state.salary) идут наверх ч/з onAdd родителю в app.js
        this.setState({
            name: '', //возврат пустых значений для очистки полей формы в верстке
            salary: '',
        });
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input required type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input required type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary" 
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;