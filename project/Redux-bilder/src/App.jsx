import { Provider } from 'react-redux';
import store from './App.js'; 
import Todo from './Component/Todo.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
