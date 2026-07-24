import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { Howl } from "howler";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import FloatingHearts from "./components/FloatingHearts";

function App() {
    const [showGallery, setShowGallery] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        return () => {
            soundRef.current?.unload();
        };
    }, []);

    const startMusic = () => {
        if (!soundRef.current) {
            soundRef.current = new Howl({
            src: ["/music/lofi-japan.mp3"],
            loop: true,
                volume: 0.32,
            });
        }

        if (!soundRef.current.playing()) {
            soundRef.current.play();
        }
    };

    const toggleMusic = () => {
        const nextMutedState = !isMuted;
        setIsMuted(nextMutedState);
        soundRef.current?.mute(nextMutedState);
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#f8e8e8]">
            <AnimatePresence mode="wait">
                {!showGallery ? (
                    <motion.div
                        key="intro"
                        exit={{ opacity: 0, scale: 1.025 }}
                        transition={{ duration: 0.65, ease: "easeInOut" }}
                    >
                        <Intro
                            onOpen={startMusic}
                            onFinish={() => setShowGallery(true)}
                        />
                        <FloatingHearts />
                    </motion.div>
                ) : (
                    <motion.div
                        key="gallery"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Gallery />
                    </motion.div>
                )}
            </AnimatePresence>

            {showGallery && (
                <button
                    type="button"
                    onClick={toggleMusic}
                    aria-label={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}
                    aria-pressed={isMuted}
                    className="music-control"
                >
                    {isMuted ? <FiVolumeX aria-hidden="true" /> : <FiVolume2 aria-hidden="true" />}
                    <span>{isMuted ? "Bật nhạc" : "Đang phát"}</span>
                </button>
            )}
        </div>
    );
}

export default App;
