import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Profile from './components/Profile/Profile.jsx'
import { Provider } from 'react-redux';
import JoinSession from "./components/JoinSession/JoinSession";
import MySessions from './components/MySessions/MySessions';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import store from "./redux/store"
import Forum from "./components/Forum/Forum";

function App() {
  return (
    <Provider store={store}>
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/join" element={<JoinSession />} />
            <Route path="/mysessions" element={<MySessions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
    </Router>
    </Provider>
  );
}

export default App;