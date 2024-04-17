import Footer from "../Components/Footer/Footer";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import NavBar from "../Components/NavBar/NavBar";

function FrontPage() {

    return (
        <div>
            <NavBar homepage />
            <HomeBanner homepage />
            <Footer />
        </div>
    )
}

export default FrontPage