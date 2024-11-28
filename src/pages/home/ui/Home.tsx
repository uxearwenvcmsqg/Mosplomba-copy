import { Header } from "../../../widgets/layout/header/index";
import { Slider } from "../../../features/slider/index";
import { NavBar } from "../../../entities/navBar";
function Home() {
  return (
    <div className="px-[5vw] ">
      <Header />
      <NavBar />
      <Slider />
    </div>
  );
}

export default Home;
