import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Login2 from './Login2.jsx';
import Home from './Home.jsx';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login2" element={<Login2 />} />
      </Routes>
    </Router>
  );
}

export default App
