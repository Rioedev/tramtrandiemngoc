import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Masonry from "react-masonry-css";
import photos from "../data/photos";

export default function Gallery() {
    // Cấu hình số cột responsive cho Masonry
    const breakpointColumns = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <div
            className="relative p-6 flex flex-col items-center min-h-screen overflow-hidden
    bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200 
    [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)]
    [background-size:20px_20px]"
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-pink-600 mb-8"
            >
                Album của chị Trâm 💖
            </motion.h2>

            <PhotoProvider>
                <div className="w-full max-w-6xl px-4">
                    <Masonry
                        breakpointCols={breakpointColumns}
                        className="flex gap-5"
                        columnClassName="masonry-column flex flex-col gap-5"
                    >
                        {photos.map((src, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                            >
                                <PhotoView src={src}>
                                    <img
                                        src={src}
                                        alt={`photo-${i}`}
                                        className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                                    />
                                </PhotoView>
                            </motion.div>
                        ))}
                    </Masonry>
                </div>
            </PhotoProvider>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10 text-lg text-pink-500 italic"
            >
                “Made by Rio”
            </motion.p>
        </div>
    );
}
