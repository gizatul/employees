import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props; //onDelete - проп кот-й передавали ниже по иерархии т.е. employees-list

    let classNames = 'list-group-item d-flex justify-content-between'; //присваиваем базовую часть класса
    if (increase) { // если increase = true
        classNames += ' increase'; //то добавляем класс increase (не забываем про пробел вначале!)
    } 

    if (rise) { // если increase = true
        classNames += ' like'; //то добавляем класс like (не забываем про пробел вначале!)
    } 

    return ( //Добавляем classNames
        <li className={classNames}> 
            <span onClick={onToggleProp} className='list-group-item-label' data-toggle='rise'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/> 
            {/* defaultValue значит, что именно это значение будет показано по умолчанию */}
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
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

export default EmployeesListItem;