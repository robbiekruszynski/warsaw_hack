import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from './GlobalTheme';
import Topbar from "./constants/TopBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <div className = 'app'>
        <main className="content">
          <Topbar/>
        </main>
        <p>ETHWARSAW</p>
      </div>
   </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
  