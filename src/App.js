import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from './GlobalTheme';
import Dashboard from './area/dashboard/Dashboard';
import Topbar from "./area/constants/TopBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <div className = 'app'>
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
  