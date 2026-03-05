import Navbar from "./Components/Navbar";
import SiteContent from "./Components/SiteContent";

function App() {
  return (
    <div className="h-full md:h-screen bg-base-100 p-2 flex">
      <div className="flex-1 flex bg-base-300 rounded-xl p-5 flex-col md:flex-row">
        <Navbar />
        <SiteContent />
      </div>
    </div>
  );
}

export default App;
