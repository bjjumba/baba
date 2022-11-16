
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';


function App() {
  return (
    <div className="container">
       <TopBar/>
       <SideBar/>
       <Main/>
    </div>
  );
}

export default App;
