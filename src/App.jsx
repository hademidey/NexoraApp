import Banner from "./components/Banner";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import Contacts from "./components/Contacts";
import Testimonials from "./components/Testimonials";
import NewsArticles from "./components/NewsArticles";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-screen">
      <Header />
      <Banner />
      <AboutUs/> 
      <Services />
      <OurTeam />
      <Contacts/>
      <Testimonials />
      <NewsArticles/>
      <Footer/>

      

    </div>
  );
}

export default App;
