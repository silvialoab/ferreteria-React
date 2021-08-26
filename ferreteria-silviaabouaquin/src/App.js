import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App"  >
        <Navbar />
        <Switch>
        <Route path="/" exact>
          <ItemListContainer titulo='Lo que buscas, y mas.....' />  
        </Route>  
        <Route path="/:producto" exact>
          <ItemListContainer titulo='Productos' />  
        </Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;