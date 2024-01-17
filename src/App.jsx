import HeroSection from "./components/HeroSection/HeroSection";
import InnerNavbar from "./components/InnerNavbar/InnerNavbar";
import MouseFollow from "./components/MouseFollow/MouseFollow";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTop";
import SecondComponent from "./components/SecondComponent/SecondComponent";
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";
import './App.css'
import FourthComponent from "./components/FourthComponent/FourthComponent";
import FifthComponent from "./components/FifthComponent/FifthComponent";
import SixthComponent from "./components/SixthComponent/SixthComponent";
import CardElement from "./components/CardElement/CardElement";

const App = () => {
    return(
        <div className=" font-archivo">
            <MouseFollow />
            <Navbar />
            <InnerNavbar />
            <HeroSection />
            <ScrollToTopButton />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
            <SixthComponent />
        </div>
    )
}

export default App;