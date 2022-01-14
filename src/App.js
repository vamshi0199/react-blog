import {BrowserRouter as Router,Routes, Route, Navigate,} from "react-router-dom";
import Article from "./components/Article";
import { BlogProvider } from "./components/Content";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/article/:articleTitle/:articleCategory" element={<Article />} />
          <Route path="/category/:categoryName"  element={<Category />} />
          
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
