
import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Users from './Users';

function App() {

  function handelClick(){
     alert ('Button clciked!')
  }

  const handelButtonClick = ()=>{
      alert('Clicked me')
  }

  const addToFive = (number)=>{
      alert(number+5);
  }

  return (
    <>
      <h3>React core concept 02</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handelClick}>Click me</button>
       <button onClick={handelButtonClick}>Click 2</button>
       <button onClick={() =>{alert('Thhird click')}}>Third</button>

       <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App
