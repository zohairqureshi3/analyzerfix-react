import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './App.scss';
import Header from './Components/Header';
import Bannerr from './Components/Bannerr';
import HowItWorks from './Components/HowItWorks';
import AmazingFeature from './Components/AmazingFeature';
import FaceDectection from './Components/FaceDectection';
import FaceCompare from './Components/FaceCompare';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Bannerr />
        <HowItWorks />
        <AmazingFeature />
        <FaceDectection />
        <FaceCompare />
      </main>
      <Footer />
    </div>
  );
}

export default App;
