import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Dashboard from './client/components/Dashboard/Dashboard.jsx'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './client/reducers';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
    </Router>
    </Provider>
  );
}

export default App;