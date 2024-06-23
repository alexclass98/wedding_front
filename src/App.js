import React, { useState, useEffect } from "react";
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
            <ResponsiveContent />
        </div>
    );
}

function ResponsiveContent() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isMobile) {
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
    } else {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div style={{ fontSize: "2em" }}>Откройте ссылку с телефона!</div>
            </div>
        );
    }
}

export default App;