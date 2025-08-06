import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Titulo from './Titulo';
import Rodape from './Rodape';
import Menu from './Menu'


function App() {


  return (
    <>
      <div className='container'>
        <Titulo />
      </div>
      <Menu/>
      <Rodape />
    </>
  )
}

export default App
