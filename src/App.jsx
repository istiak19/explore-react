import './App.css'
import Count from './Count'
import Team from './Team'
import User from './User'

function App() {
  function handleClick(){
    alert('Click Me')
  }
  const handleClick2=()=>{
    alert('Click Me 2')
  }
  const handleClick4=(num)=>{
    alert(num+3)
  }
  

  return (
    <>
      <h3>React core concept-2</h3>
      <User></User>
      <Count></Count>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('click me 3')}}>Click Me 3</button>
      <button onClick={()=>handleClick4(5)}>Click Me 4</button>
    </>
  )
}

export default App
