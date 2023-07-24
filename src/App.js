

import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Navbar/>
      <AllRoutes/>
  
      </header>
      <Footer />
    </div>
  );
}

export default App;
