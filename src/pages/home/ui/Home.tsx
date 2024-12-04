import Layout from '../../../app/Layout';
import { Slider } from '../../../features/slider/index';
import {Catalog} from '../../../widgets/Catalog/index'

function Home() {
  return (
    <div className="justify-center ">
      <Layout>
        <div>
          <Slider />
          <Catalog/>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
