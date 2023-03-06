import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
      const {id, ...itemProps} = item; //вытаскиваем id, остальные св-ва объединяем в itemProps - деструктуризация

      return (
        <EmployeesListItem 
          key={id} 
          {...itemProps}
          onDelete={() => onDelete(id)} /*передаем проп onDelete - действие,кот-е будет вызвано пользователем */
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> //через getAttribute можем вытащить название нужного нам св-ва, который идет вторым аргументом в ф-ю onToggleProp
      )
    }); //в elements возвращается новый массив //{...item} - то же самое что и name={item.name} salary={item.salary}
    return (
      <ul className="app-list list-group">
        {elements}
      </ul>
    )
}
export default EmployeesList;