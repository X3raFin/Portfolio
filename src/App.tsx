import Navbar from "./Components/Navbar";
import SiteContent from "./Components/SiteContent";

function App() {
  return (
    <div className="h-screen bg-base-100 p-2 flex">
      <div className="flex-1 flex items-start bg-base-300 rounded-xl p-5">
        <Navbar />
        <SiteContent />
      </div>
    </div>
  );
}

export default App;
