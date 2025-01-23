import './App.css';
import react from 'react';
import SubmitCompo from './components/to-do-compo';
import LoginCompo from './components/login-page-compo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/login" element={<LoginCompo />} />
        <Route path="/submit" element={<SubmitCompo />} />
      </Routes>
    </Router>
    </div>
  );
}


export default App;
