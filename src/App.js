import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from './GlobalTheme';
import Dashboard from './area/dashboard/Dashboard';
import Topbar from "./constants/TopBar";
import Sidebar from './constants/SideBar';

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
          </Routes>
        </main>
      </div>
   </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
  