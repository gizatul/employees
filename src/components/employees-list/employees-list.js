import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
      const {id, ...itemProps} = item; //вытаскиваем id, остальный св-ва объединяем в itemProps - деструктуризация
      return (
        <EmployeesListItem 
        key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}/> //передаем проп onDelete - действие,кот-е будет вызвано пользователем
      )
    }); //в elements возвращается новый массив //{...item} - то же самое что и name={item.name} salary={item.salary}
    return (
      <ul className="app-list list-group">
        {elements}
      </ul>
    )
}
export default EmployeesList;