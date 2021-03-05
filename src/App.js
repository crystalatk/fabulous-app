import Header from './components/Header';
import Input from './components/Input';
import SendToFetch from './components/SendToFetch';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Route exact path='/'>
          <Input />
        </Route>
        <Route path={`/:name/:type`}>
          <SendToFetch />
        </Route>
      </Router>
    </div>
  );
}

export default App;
