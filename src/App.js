
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './Pages/NotFound';
import Logement from  './Pages/LogementInfos'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/home" exact element={<Home />}/>
          <Route path="/"  element={<Home />}/>
          <Route path="/a-propos"element={<About/>}/>
          <Route  exact path="/logement/:id" element= {<Logement/>}/>
          <Route   path ="*" element= {<NotFound/>}/>
          <Route element= {<NotFound/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

