import './App.css';
import React, { useState } from 'react';
import Counter from './Components/Counter/Counter';
/* import StudentList from './Components/StudentList/StudentList';
import ProjectList from './Components/ProjectList/ProjectList'; */
import MovieList from './Components/MovieList/MovieList';
import ImprovedMovieList from './Components/ImprovedMovieList/ImprovedMovieList';
import Spinner from './Components/Spinner/Spinner';

function App() {
  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };
  let [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={'App ' + theme}>
        <h1>React - state and events</h1>
        <Counter theme={theme} />
        <select onChange={toggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        {/*       <StudentList></StudentList>
          <ProjectList></ProjectList> 
          <MovieList></MovieList>*/}
        <ImprovedMovieList></ImprovedMovieList>
      </div>
    );
  }
}

export default App;
