import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from './GlobalTheme';
import Dashboard from './area/dashboard/Dashboard';
import Topbar from "./constants/TopBar";
import Sidebar from './constants/SideBar';
import Line from './components/data/Line';
import Bar from './components/data/Bar';
import Pie from './components/data/Pie';
import Geo from './components/data/Geo';
import Cal from './components/data/Cal';
import Concept from './components/Concept';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <div className = 'app'>
      <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar/>
          <Routes>
          <Route path="/"element = {<Dashboard/>} />
          <Route path="/concept"element = {<Concept/>} />
          <Route path="/line"element = {<Line/>}/>
          <Route path="/bar"element = {<Bar/>}/>
          <Route path ='/Pie'element = {<Pie/>}/>
          <Route path ='/Geo'element = {<Geo/>}/>
          <Route path ='/Cal'element = {<Cal/>}/>
          </Routes>
        </main>
      </div>
   </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
  