import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Blog from "./components/blog"
import BlogPost from "./components/BlogPost.JSX";
import { AuthContext, useAuth } from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  const auth = useAuth();

  return (
    <Router>
      <AuthContext.Provider>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Profile'>Profile</Link>
          <Link to='/login'>Login</Link>
        </nav>
        <Routes>
          <Route path='/' element={<h2>Home</h2>} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path='/profile/*' element={<Profile />} />
          {!auth.user && (<Route path='/login' element={<Login />} />)}
          
        </Routes>
      </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
