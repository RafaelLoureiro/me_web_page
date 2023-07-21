import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {


  return (
    <div className="portifolioMe">
      <h1 className="portifolioMe__Name">Rafael L. Melo</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
