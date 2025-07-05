import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './components/Blog/Blog';
import BlogHome from './pages/Blog/BlogHome';
import EcobeeBlog from './pages/Blog/ecobee';
import RbcBlog from './pages/Blog/rbc';
import System1Blog from './pages/Blog/system1';
import EbcBlog from './pages/Blog/ebc';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogHome />} />
          <Route path="ecobee" element={<EcobeeBlog />} />
          <Route path="rbc" element={<RbcBlog />} />
          <Route path="system1" element={<System1Blog />} />
          <Route path="ebc" element={<EbcBlog />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
