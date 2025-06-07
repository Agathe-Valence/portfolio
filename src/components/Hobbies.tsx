import { useState } from "react";

const images = [
    "/portfolio/assets/drone build.jpg",
    "/portfolio/assets/drone max.jpg",
    "/portfolio/assets/drone.jpg",
    "/portfolio/assets/FlyForEveryone.jpg",
    "/portfolio/assets/wakee.jpg",
    "/portfolio/assets/wakee_biais.jpg",
    "/portfolio/assets/rviz.png",
    "/portfolio/assets/parkinson.jpg",
    
];

const captions = [
    "Drone in construction",
    "Drone in flight",
    "FlyForEveryone event",
    "FlyForEveryone event with hospitalized people",
    "Wakee Testing",
    "Wakee prototype",
    "RViz visualization",
    "Parkinson project",
    
];

function handlePrev(setCurrentIndex: React.Dispatch<React.SetStateAction<number>>, currentIndex: number): void {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
}

function handleNext(setCurrentIndex: React.Dispatch<React.SetStateAction<number>>, currentIndex: number): void {
    setCurrentIndex((currentIndex + 1) % images.length);
}

const Hobbies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            {/* About Section */}
            <section id="about" className="mb-16">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-4">
                        <div className="bg-mediumGray rounded-lg p-6 h-full">
                            <div className="relative">
                                <img
                                    className="w-full h-48 rounded-lg mb-2 object-cover"
                                    src={images[currentIndex]}
                                    alt={captions[currentIndex]}
                                />
                                <p className="text-center text-gray-400 mb-4">{captions[currentIndex]}</p>

                                <button
                                    onClick={() => handlePrev(setCurrentIndex, currentIndex)}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: 0,
                                        transform: "translateY(-50%)",
                                        background: "#18181bcc",
                                        border: "none",
                                        fontSize: "1rem",
                                        padding: "8px 14px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        transition: "background 0.2s",
                                    }}
                                    aria-label="Previous slide"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={() => handleNext(setCurrentIndex, currentIndex)}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        right: 0,
                                        transform: "translateY(-50%)",
                                        background: "#18181bcc",
                                        border: "none",
                                        fontSize: "1rem",
                                        padding: "8px 14px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        transition: "background 0.2s",
                                    }}
                                    aria-label="Next slide"
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-8">
                        <h2 className="text-2xl font-bold mb-6 text-lightBlue">Hobbies & Projects</h2>
                        <p className="text-gray-300 mb-4">
                            <strong>American Football</strong>: I played this sport for 2 years in a club. I particularly enjoy the team spirit and the fact that every member is important to the team.
                        </p>
                        <p className="text-gray-300 mb-4">
                            <strong>Drones</strong>: I own my own drone and was a board member of my school’s drone club. I organized the event “FlyForEveryone”: outings to allow hospitalized people to escape for a moment by experiencing immersive flights.
                        </p>
                        <p className="text-gray-300 mb-4">
                            <strong>Travel</strong>: I have had the opportunity to travel to the US West Coast, New York, Croatia, the United Kingdom, the Canary Islands, Belgium, Luxembourg, Switzerland, Canada, Guadeloupe, Martinique, and Hungary.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hobbies;
