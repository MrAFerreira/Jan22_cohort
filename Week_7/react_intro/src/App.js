import logo from './logo.svg';
import './App.css';
import MyButton from './Components/MyButton/MyButton';
import Gallery from './Components/Gallery/Gallery';
import ClassComponent from './Components/ClassComponent/ClassComponent';
//
//This is a comment
function App() {
  return (
    <div className="App">
      <Gallery></Gallery>
      <img src={logo} alt="logo" />
      {/*    <img
        src="https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"
        alt="logo"
      /> */}
      <ClassComponent></ClassComponent>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <hr />
    </div>
  );
}

export default App;
