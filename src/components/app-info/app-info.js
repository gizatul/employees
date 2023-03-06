import './app-info.css';

const AppInfo = ({incNum, empNum}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>Общее число сотрудников: {empNum}</h2>
      <h2>Премию получат: {incNum}</h2>
    </div>
  )
}

export default AppInfo;