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
import EmailVerification from './components/SignUp/EmailVerification';
import store from "./redux/store"
import Forum from "./components/Forum/Forum";

function App() {
  return (
    <Provider store={store}>
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/join" element={<JoinSession />} />
            <Route path="/mysessions" element={<MySessions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/email-verification" element={<EmailVerification />} />
          </Routes>
        </main>
    </Router>
    </Provider>
  );
}

export default App;