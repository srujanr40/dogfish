import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import CreateSessionPopup from './components/create-session/CreateSessionPopup';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <CreateSessionPopup />
    </Provider>
  );
}

export default App;
