import './App.css';
import {Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import Forum from './pages/Forum';
import Signin from './pages/Signin';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}   />
        <Route path="/forum" element={<Forum/>}   />
        {/* <Route path="/signin" element={<Signin/>}   /> */}
        <Route path="/packages" element={<Packages/>}   />
      </Routes>
    </div>
  );
}

export default App;
