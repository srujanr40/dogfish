import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Routes, Redirect
} from 'react-router-dom';

import Dashboard from './client/components/Dashboard/Dashboard.jsx'

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
