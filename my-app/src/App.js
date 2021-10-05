import Form from './components/Form'
import Card from './components/Card'
import New from './components/New'
import Band from './components/Band'

function App() {
  return (
   <>
    <div className="App">
      <header className="App-header">
        <img src='{}' className="App-logo" alt="logo" />
        <p>
          Chris Livingston 
        </p>
      </header>
    </div>
    <h1 className="heading">New App</h1>
    <button className="btn btn-primary">Click Me</button>
    <Form />
    <Card />
    <New />
    <Band />
  </>
  )
}



export default App
