import Beranda from "./components/Layouts/Beranda";
import Education from "./components/Layouts/Education.jsx";
import Profile from "./components/Layouts/Profile.jsx";

function App() {
  return (
    <div id="beranda" className="bg-cream-gradient font-poppins pb-40 pt-14">
      <Beranda />
      <Profile />
      <Education />
    </div>
  );
}

export default App;
