import Nav from "./Nav";
import Src from "./Src";
import Gallery from "./Gallery";

function App() {
  return (
    // Outer container
      <div className="flex justify-center items-center min-h-screen bg-cyan-50">
        {/* card Container */}
        <div className="bg-white m-3 space-y-10 p-6 shadow-2xl rounded-3xl md:p-40">
        <Nav />
        <Src />
        <Gallery />
        </div>
      </div>
  );
}

export default App;
