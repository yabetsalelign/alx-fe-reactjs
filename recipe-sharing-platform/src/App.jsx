import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
  <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* New route for the form */}
</Routes>

    </Router>
  );
}

export default App;
