import { useEffect } from "react";
import Banner from "./Banner";
import Marque from "./Marque";

import Aos from "aos";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="px-12">
      <Banner></Banner>
      <Marque></Marque>
    </div>
  );
};

export default Home;
