import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Eligibility from '../pages/Eligibility';
import Result from '../pages/Result';
import Assistant from '../pages/Assistant';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/result" element={<Result />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
