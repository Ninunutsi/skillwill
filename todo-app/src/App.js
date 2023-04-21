import './App.css';
import Backlog from './backlog';
import Inprogress from './inprogress';
import Done from './done';
// aqedan iwyeb ed

function App(){
  return (
    <div className='body'>
    <Backlog />
    <Inprogress />
    <Done />
    </div>
  )
}

export default App;

