import { useState, useEffect, useRef } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Gallery() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const goNext = () => {
        if (openIndex === null) return;
        setOpenIndex((openIndex + 1) % items.length);
    };

    const goPrev = () => {
        if (openIndex === null) return;
        setOpenIndex((openIndex - 1 + items.length) % items.length);
    };

    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (openIndex === null) return;

        document.body.style.overflow = "hidden";

        const opener = document.activeElement as HTMLElement | null;
        closeButtonRef.current?.focus();

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        document.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKey);
            opener?.focus();
        };
    }, [openIndex]);

    useEffect(() => {
        if (openIndex === null) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        document.addEventListener("keydown", handleKey);

        return () => document.removeEventListener("keydown", handleKey);
    }, [openIndex]);

    return (
        <>
            <ul className="gallery">
                {items.map((n, i) => (
                    <li key={n} className="gallery__item">
                        <button
                            type="button"
                            className="gallery__thumb"
                            onClick={() => setOpenIndex(i)}
                        >
                            {n}
                        </button>
                    </li>
                ))}
            </ul>

            {openIndex !== null && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image agrandie"
                    onClick={() => setOpenIndex(null)}
                >

                    <button
                        type="button"
                        className="lightbox__nav lightbox__nav--prev"
                        aria-label="Image précédente"
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    >‹</button>

                    <div className="lightbox__image" onClick={(e) => e.stopPropagation()}>
                        {items[openIndex]}
                    </div>

                    <button
                        type="button"
                        className="lightbox__nav lightbox__nav--next"
                        aria-label="Image suivante"
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                    >›</button>



                    <button
                        type="button"
                        className="lightbox__close"
                        ref={closeButtonRef}
                        onClick={() => setOpenIndex(null)}
                    >Fermer</button>

                    <p className="lightbox__counter">{openIndex + 1} / {items.length}</p>
                </div>
            )}
        </>
    );
}