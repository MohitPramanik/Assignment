import AttendingSection from "./AttendingSection";
import CountDownSection from "./CountDownSection";
import CouplesSection from "./CouplesSection";
import EndingSection from "./EndingSection";
import WeddingSection from "./WeddingSection";
import "./Home.css";
import Slider from "./Slider";

function Home() {
    return (
        <div>
            <Slider />
            <CouplesSection />
            <CountDownSection />
            <WeddingSection />
            <AttendingSection />
            <EndingSection />
        </div>
    );
}

export default Home;
