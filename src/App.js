
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path = '/*' element = {<NotFound />}/>
          <Route path="/home" exact element={<Home />}/>
          <Route path="/"  element={<Home />}/>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

