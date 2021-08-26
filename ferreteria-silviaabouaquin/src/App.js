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
        <Route path="/">
          <ItemListContainer titulo='Lo que buscas, y mas.....' />  
        </Route>  
        <Route path="/:producto">
          <ItemListContainer titulo='Lo que buscas, y mas.....' />  
        </Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;