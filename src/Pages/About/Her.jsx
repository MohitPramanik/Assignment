import womanProfile from "../../Images/womanProfile.jpg";
import aboutWomanFooter from "../../Images/aboutWomanFooter.jpg";
import AboutPerson from "./AboutPerson";

function Her() {
    const about = {
        imageHead: womanProfile,
        imageFoot: aboutWomanFooter,
        name: "Dianne Anna",
    };
    return (
        <div>
            <AboutPerson {...about} />
        </div>
    );
}

export default Her;
