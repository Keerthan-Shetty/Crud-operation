import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Create from './component/Create';
import Update from './component/Update';
import Read from './component/Read';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/create' Component={Create}></Route>
          <Route exact path='/read/:id' Component={Read}></Route>
          <Route exact path='/update/:id' Component={Update}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
