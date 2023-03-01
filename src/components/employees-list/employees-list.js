import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
      return (
        <EmployeesListItem  {...item}/>
      )
    }); //в elements возвращается новый массив //{...item} - то же самое что и name={item.name} salary={item.salary}

    return (
      <ul className="app-list list-group">
        {elements}
      </ul>
    )
}
export default EmployeesList;