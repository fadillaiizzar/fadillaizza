import Beranda from "./components/Layouts/Beranda";
import Education from "./components/Layouts/Education.jsx";
import Profile from "./components/Layouts/Profile.jsx";
import Project from "./components/Layouts/Project.jsx";
import Skill from "./components/Layouts/Skill.jsx";

function App() {
  return (
    <div id="beranda" className="bg-gradient-to-r from-pink-200 via-orange-300 to-yellow-200 font-poppins pb-40 pt-14">
      <Beranda />
      <Profile />
      <Education />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
