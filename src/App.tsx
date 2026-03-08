import Navbar from "./Components/Navbar";
import SiteContent from "./Components/SiteContent";

function App() {
  return (
    <div className="h-full md:h-screen bg-base-100 md:p-2 flex flex-wrap">
      <div className="flex-1 flex bg-base-300 rounded-xl md:p-5 flex-col md:flex-row">
        <Navbar />
        <SiteContent />
      </div>
    </div>
  );
}

export default App;
