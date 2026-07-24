import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import photos from "../data/photos";

const captions = [
    "Một chút dịu dàng",
    "Rực rỡ theo cách riêng",
    "Ngày mình thật vui",
    "Nụ cười thân quen",
    "Chạm vào điều đáng nhớ",
    "Khoảnh khắc thật xinh",
    "Giữa những ngày trong veo",
    "Một ngày đầy nắng",
    "Bình yên ở ngay đây",
    "Chuyện của những nụ cười",
    "Lưu lại một ngày vui",
    "Những điều rất đỗi thân thương",
    "Một góc trời kỷ niệm",
    "Rạng rỡ và tự do",
    "Thêm một trang thật đẹp",
    "Nụ cười làm ngày sáng hơn",
    "Khoảnh khắc muốn giữ mãi",
    "Giáng sinh thật ấm áp",
];

const rotations = [-2.2, 1.4, -0.8, 2, -1.5, 0.7, 1.8, -1.2, 0.5];

export default function Gallery() {
    return (
        <main className="scrapbook-page">
            <div className="scrapbook-dots" aria-hidden="true" />
            <div className="thread-line thread-line-left" aria-hidden="true" />
            <div className="thread-line thread-line-right" aria-hidden="true" />

            <header className="scrapbook-header">
                <motion.div
                    className="torn-paper"
                    initial={{ opacity: 0, y: -24, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="header-sticker" aria-hidden="true">♡</span>
                    <p className="scrapbook-kicker">Những điều đáng yêu được cất giữ ở đây</p>
                    <h2>Album của chị Trâm</h2>
                    <p className="scrapbook-subtitle">
                        Một cuốn sổ nhỏ, gom lại thật nhiều khoảnh khắc xinh.
                    </p>
                </motion.div>
            </header>

            <PhotoProvider>
                <section className="scrapbook-grid" aria-label="Album ảnh của chị Trâm">
                    {photos.map((src, i) => {
                        const isWide = i === 4 || i === 11;
                        const rotation = rotations[i % rotations.length];

                        return (
                            <motion.article
                                key={i}
                                className={`polaroid ${isWide ? "polaroid-wide" : ""}`}
                                style={{ "--card-rotation": `${rotation}deg` } as React.CSSProperties}
                                initial={{ opacity: 0, y: 34, rotate: rotation }}
                                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                                viewport={{ once: true, amount: 0.12 }}
                                whileHover={{ y: -7, rotate: 0, scale: 1.025 }}
                                transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
                            >
                                <span
                                    className={`photo-tape ${i % 3 === 0 ? "tape-left" : i % 3 === 1 ? "tape-center" : "tape-right"}`}
                                    aria-hidden="true"
                                />
                                <PhotoView src={src}>
                                    <button
                                        type="button"
                                        className="photo-button"
                                        aria-label={`Xem ảnh: ${captions[i]}`}
                                    >
                                        <img
                                            src={src}
                                            alt={`Chị Trâm — ${captions[i]}`}
                                            className="polaroid-photo"
                                            loading={i < 4 ? "eager" : "lazy"}
                                            decoding="async"
                                        />
                                    </button>
                                </PhotoView>
                                <div className="polaroid-caption">
                                    <span>{String(i + 1).padStart(2, "0")}</span>
                                    <p>{captions[i]}</p>
                                    <span aria-hidden="true">♡</span>
                                </div>
                            </motion.article>
                        );
                    })}
                </section>
            </PhotoProvider>

            <motion.footer
                className="scrapbook-footer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span aria-hidden="true">✿</span>
                <p>Mỗi khoảnh khắc đều xứng đáng được nâng niu.</p>
                <strong>Made with love by Rio</strong>
            </motion.footer>
        </main>
    );
}
