import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Area, Bar, Calendar, Customers, ECommerce, Employees, Kanban, Line, Orders, Pie } from "./pages";



function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white">Sidebar</div>
          ) : (
            <div className="w-0">Sidebar2</div>
          )}
          <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg w-full navbar">navbar</div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<ECommerce/>}/>
              <Route path="/ecommerce" element={<ECommerce/>}/>
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/kanban" element={<Kanban/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/area" element={<Area/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App
