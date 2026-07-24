import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import FloatingHearts from "./components/FloatingHearts";
import { Howl } from "howler";

function App() {
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        const sound = new Howl({
            src: ["/music/lofi-japan.mp3"],
            autoplay: true,
            loop: true,
            volume: 0.4,
        });
        sound.play();
    }, []);

    return (
        <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-white">
            {!showGallery ? (
                <Intro onFinish={() => setShowGallery(true)} />
            ) : (
                <Gallery />
            )}
            <FloatingHearts />
        </div>
    );
}

export default App;
