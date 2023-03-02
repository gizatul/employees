import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({ //деструктуризация increase из this.state
            increase: !increase, //increase будет назначаться противоположное значение increase
        }));
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like,
        }));
    }

    render () {
        const {name, salary, onDelete} = this.props; //onDelete - проп кот-й передавали ниже по иерархии т.е. employees-list
        const {increase, like} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between'; //присваиваем базовую часть класса
        if (increase) { // если increase = true
            classNames += ' increase'; //то добавляем класс increase (не забываем про пробел вначале!)
        } 

        if (like) { // если increase = true
            classNames += ' like'; //то добавляем класс like (не забываем про пробел вначале!)
        } 
    
        return ( //Добавляем classNames
            <li className={classNames}> 
                <span onClick={this.onLike} className='list-group-item-label'>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/> 
                {/* defaultValue значит, что именно это значение будет показано по умолчанию */}
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;