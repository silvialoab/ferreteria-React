//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', backgroundColor:'cadetblue'}}>
        <h1 >LOPEZ      Mayorista Ferretero</h1>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh', backgroundColor:'cadetblue'}}>
        <NavBar></NavBar>
      </div>
    </>
  );
}

export default App;
