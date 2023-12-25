
import './App.css';
import Greetings from './components/Greetings';
import GreetingsClassComp from './components/GreetingsClassComp';
import MyCard from './components/MyCard';
import InNav from './components/InNav';
import MyFooter from './components/Myfooter';

function App() {
  return (
    <div className="App">
      <InNav/>
    <h3 class ="" align="justified"> Welcome to My Greetings Project!</h3>
      <Greetings name ="Jane!"/>
      <GreetingsClassComp/>
      <MyCard/>
     
      <MyFooter/>
    </div>
  );
}

export default App;
