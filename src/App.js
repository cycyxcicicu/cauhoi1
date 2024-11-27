
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dangki from './page/Dangki';
import Dangnhap from './page/Login';
import Trangchu from './page/Trangchu';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dangki />} />
    <Route path="/dangki" element={<Dangki />} />
    <Route path="/dangnhap" element={<Dangnhap />} />
	<Route path="/trangchu" element={<Trangchu />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
