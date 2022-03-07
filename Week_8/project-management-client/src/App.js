import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ProjectsListPage from './pages/ProjectsListPage/ProjectsListPage';
import ProjectDetails from './pages/ProjectDetailsPage/ProjectDetails';
import EditProjectPage from './pages/EditProjectPage/EditProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
