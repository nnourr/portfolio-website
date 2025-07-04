import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BlogPost from './components/BlogPost';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
