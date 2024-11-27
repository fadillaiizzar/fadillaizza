import ProfileSection from "./components/Elements/SectProfile.jsx";
import Beranda from "./components/Layouts/Beranda";

function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400 to-gray-800bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fdf8f2] via-[#f7e4c9] to-[#e7ba86] font-poppins">
      <Beranda />
      <ProfileSection />
    </div>
  );
}

export default App;
