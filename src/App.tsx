import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar, Sidebar } from "./components";
import { Calendar, Customers, Overview, Employees, Kanban, Conversion, ProfitAnalysis, UsersAnalysis, Distribution } from "./pages";



function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0"><Sidebar/></div>
          )}
          <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg w-full navbar">
              <Navbar/>
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Overview/>}/>
              <Route path="/overview" element={<Overview/>}/>
              <Route path="/conversion" element={<Conversion/>}/>
              {/* pages */}
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>
              {/* Apps */}
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/kanban" element={<Kanban/>}/>
              {/* Analysis */}
              <Route path="/profitAnalysis" element={<ProfitAnalysis/>}/>
              <Route path="/usersAnalysis" element={<UsersAnalysis/>}/>
              <Route path="/distribution" element={<Distribution/>}/>

            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App
