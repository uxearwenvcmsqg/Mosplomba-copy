import { Header } from '../../../widgets/layout/header/index';
import { Slider } from '../../../features/slider/index';
import { NavBar } from '../../../entities/navBar';
function Home() {
  return (
    <div className="justify-center ">
      <Header />
      <NavBar/>
      <Slider />
    </div>
  );
}

export default Home;
