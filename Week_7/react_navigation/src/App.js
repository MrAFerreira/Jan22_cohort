import './App.css';
import projectData from './projects.json';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/About/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Navbar from './components/Navbar';
import QueryExample from './pages/QueryExample/QueryExample';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectData} />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/example" element={<QueryExample />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
