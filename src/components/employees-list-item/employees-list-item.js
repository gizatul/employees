import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {

    let classNames = 'list-group-item d-flex justify-content-between'; //присваиваем базовую часть класса
    if (increase) { // если increase = true
        classNames += ' increase'; //то добавляем класс increase (не забываем про пробел вначале!)
    } 

    return ( //Добавляем classNames
        <li className={classNames}> 
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/> 
            {/* defaultValue значит, что именно это значение будет показано по умолчанию */}
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;