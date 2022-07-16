import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement} from './Actions'

function App() {
  const counter=useSelector(state=>state.counter)
  const isLoggedIn=useSelector(state=>state.isLoggedIn)

  const dispatch=useDispatch()
  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter :  {counter}</h1>
      <div style={{display:'flex',gap:'8px'}}>
      <button className='btnClasss' onClick={()=>dispatch(increment())}>+</button>
      <button className='btnClasss' onClick={()=>dispatch(decrement())}>-</button>
      </div>
      {isLoggedIn?<h3>User should not be logged in</h3> :''}
      </header>
    </div>
  );
}

export default App;
