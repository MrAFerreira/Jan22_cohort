import Navbar from './Components/Navbar/Navbar';
import Greeting from './Components/Greeting/Greeting';
import StudentCard from './Components/StudentCard/StudentCard';
import StudentList from './Components/StudentList/StudentList';
import ReactPlayer from 'react-player';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar message="Hello there!" />
      {/*     <Greeting firstName="Mamoun" />
      <hr />
      <Greeting firstName="Xico" />
      <hr />
      <Greeting firstName="Diogo" />
      <hr />
      <Greeting firstName="Hollie" />
      <hr /> */}
      <StudentList>
        <h1>I'm a child</h1>
        <StudentCard
          className="student"
          name="Rúben"
          info={{ city: 'Lisbon', course: 'Web Dev' }}
          week={7}
          isFinished={false}
        />

        <StudentCard
          className="student"
          name="Taylor"
          info={{ city: 'Lisbon', course: 'Ux Ui' }}
          week={8}
          isFinished={false}
        />

        <StudentCard
          className="student"
          name="Guilherme"
          info={{ city: 'Lisbon', course: 'Cyber Security' }}
          week={7}
          isFinished={false}
        />
      </StudentList>
      <ReactPlayer url="https://www.youtube.com/watch?v=p1u-R4RVL70" />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=p1u-R4RVL70"
        playing
        controls
        volume={0.5}
      />
    </div>
  );
}

export default App;
