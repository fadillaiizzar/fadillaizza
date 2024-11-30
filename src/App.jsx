import ProfileSection from "./components/Elements/SectProfile.jsx/ProfileSection.jsx";
import Beranda from "./components/Layouts/Beranda";

function App() {
  return (
    <div 
    id="beranda" 
    className="bg-cream-gradient font-poppins pb-40 pt-14">
      <Beranda />
      <ProfileSection />
    </div>
  );
}

export default App;
