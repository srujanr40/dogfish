import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Dashboard from './client/components/Dashboard/Dashboard.jsx'
import Profile from './client/components/Profile/Profile.jsx'
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './client/reducers';
import JoinSession from "./client/components/JoinSession/JoinSession";
import MySessions from './client/components/MySessions/MySessions';
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

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
          </Routes>
        </main>
    </Router>
    </Provider>
  );
}

export default App;