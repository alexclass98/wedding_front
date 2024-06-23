import './App.css';
import WelcomePage from "./pages/WelcomePage";
import PlacePage from "./pages/PlacePage";
import TimeTablePage from "./pages/TimeTablePage";
import DressCode from "./pages/DressCode";
import WishesPage from "./pages/WishesPage";
import ProfilePage from "./pages/ProfilePage";
import CountingPage from "./pages/CountingPage";
import FooterPage from "./pages/FooterPage";

function App() {
    return (
        <div>
            <WelcomePage/>
            <PlacePage/>
            <TimeTablePage/>
            <DressCode/>
            <WishesPage/>
            <ProfilePage/>
            <CountingPage/>
            <FooterPage/>
        </div>
    );
}

export default App;
