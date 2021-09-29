import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/Admin';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import 'styles/styles.css'

//En este app ponemos el router principal.
function App() {
  return (
    <Router>
      {/* Permite q el navegador sea capaz de coger una sola ruta de todas las que hay  */}
    <Switch>
      <Route path= '/login'>
        <Login/>
      </Route>

      <Route path= '/registro'>
        <Registro/>
      </Route>

      <Route path= '/admin'>
        <PrivateLayout>
          <Admin/>
        </PrivateLayout>
      </Route>
      
      {/* siempre se pone de ultima la ruta base */}
      <Route path= '/'>
        <PublicLayout>
           <Index/>
        </PublicLayout>
      </Route>

    </Switch>
    </Router >

  )
}

export default App;
