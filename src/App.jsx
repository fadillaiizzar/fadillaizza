import Footer from "./components/Fragments/Footer/Footer.jsx";
import Beranda from "./components/Layouts/Beranda";
import Education from "./components/Layouts/Education.jsx";
import Profile from "./components/Layouts/Profile.jsx";
import Project from "./components/Layouts/Project.jsx";
import Sertif from "./components/Layouts/Sertificate.jsx";
import Skill from "./components/Layouts/Skill.jsx";

function App() {
  return (
    <div id="beranda" className="bg-gradient-to-r from-pink-200 via-orange-300 to-yellow-200 font-poppins text-black pt-14">
      <Beranda />
      <Profile />
      <Education />
      <Skill />
      <Project />
      <Sertif />
      <Footer />
    </div>
  );
}

export default App;
