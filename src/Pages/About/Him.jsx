import manProfile from "../../Images/manProfile.jpg";
import aboutManFooter from "../../Images/aboutManFooter.jpg";
import AboutPerson from "./AboutPerson";

function Him() {
    const about = {
        imageHead: manProfile,
        imageFoot: aboutManFooter,
        name: "Gerrard Leandro",
    };
    return (
        <div>
            <AboutPerson {...about} />
        </div>
    );
}

export default Him;
