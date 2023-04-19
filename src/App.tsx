import { BrowserRouter } from "react-router-dom";
import './App.css';


function App() {
const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative">
      {activeMenu ? (
         <div className="w-72 fixed sidebar bg-white">Sidebar</div>
      ) : (
        <div className="w-0"> Sidebar</div>
      )}
      <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`}></div>

      </div>

      </BrowserRouter>
    </div>
  )
}

export default App
