import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <h1>File Sharing System</h1>
     <div className="row">
       <div className="col-md-6">
         <Register/>
       </div>
       <div className="col-md-6">
          <Login/>
       </div>

     </div>
     <div className="row justify-content-center">
       <div className="col-md-8">
         <UsersList/>
       </div>
     </div>
    </div>
  );
}

export default App;
