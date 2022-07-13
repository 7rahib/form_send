import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Message from './components/Message';

function App() {
  return (
    <div className='bg'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
