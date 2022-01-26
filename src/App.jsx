
import logo from './logo.svg'
import './App.css'
import { Route, Switch } from 'wouter'
import { Index } from './views/Index'
import { Detalle } from './views/Detalle'


function App() {

  return <>

    <Switch>
      <Route path='/' component={Index}/>
      <Route path='/detalle/:id' >
        {(params) => <Detalle id={params.id}/>}
      </Route>
    </Switch>
  
  </>
}

export default App
