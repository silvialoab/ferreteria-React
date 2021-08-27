import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App"  >
        <Navbar />
        <Switch>
        <Route path="/" exact>
          <ItemListContainer titulo='Lo que buscas, y mas.....' />  
        </Route>  
        <Route path="/:categoria/:id" exact>
          <ItemDetailContainer titulo='Productos' />  
        </Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;