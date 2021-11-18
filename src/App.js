import './App.css';
import Main from './component/main/main'
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
