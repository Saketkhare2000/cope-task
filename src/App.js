//Global style
import "./global.css";
//components
import Taskbar from "./components/taskbar";
import Navbar from "./components/navbar";
import { WebProvider } from "./context/WebContext";
import PageView from "./components/page view";

function App() {
  return (
    <WebProvider>
      <Navbar />
      <Taskbar />
      <PageView />
    </WebProvider>
  );
}

export default App;
