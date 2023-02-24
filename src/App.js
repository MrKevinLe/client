import './App.css';
import FindAll from './components/FindAll';
import Create from './components/Create';
import Species from './components/Species';
import FindOne from './components/FindOne';

import { Link, Routes, Route } from "react-router-dom"


function App() {
      return (<>
  <div className="App">
      <div className='inner-nav'> 
      <div className='nav-title'>
      <h1 className='title2'>Fishing with Friends</h1>
      </div>
      </div>
      <div className='inner-nav2'>
      <div className='nav-home'>
      <Link to={'/'}><button>Home</button></Link>
      </div>
      <div className='nav-create'>
      <Link to={'/create'}><button>Create</button></Link>
      </div>
      <div className='nav-species'>
      <Link to={'/species'}><button>Species</button></Link>
      </div>
      </div>
    </div>
      <Routes>
        <Route path={"/"} element={<FindAll />} />
        <Route path={"/create"} element={<Create />} />
        <Route path={"/species"} element={<Species/>}/>
        <Route path={"/:speciesID"} element={<FindOne/>}/>
      </Routes>
      </>
    
  );
}

export default App;
