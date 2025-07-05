import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './components/Blog/Blog';
import BlogHome from './pages/Blog/BlogHome';
import EcobeeBlog from './pages/Blog/ecobee';
import BlogPost2 from './pages/Blog/BlogPost2';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogHome />} />
          <Route path="ecobee" element={<EcobeeBlog />} />
          <Route path="react-patterns" element={<BlogPost2 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
