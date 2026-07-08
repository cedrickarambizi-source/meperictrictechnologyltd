import { useEffect, useState } from "react";
import landmarkProject from "@/assets/projects/landmark-project.png";
import bahoHospital from "@/assets/projects/baho-hospital.png";
import kafamHouse from "@/assets/projects/kafam-house.png";
import kgpApartment from "@/assets/projects/kgp-apartment.png";
import ikazeHouse from "@/assets/projects/ikaze-house.png";
import nisr from "@/assets/projects/nisr.png";
import worldvisionHq from "@/assets/projects/worldvision-hq.png";
import laCroixDuSud from "@/assets/projects/la-croix-du-sud.png";
import victoryVilla from "@/assets/projects/victory-villa.png";
import mininter from "@/assets/projects/mininter.png";

const IMAGES = [
  landmarkProject,
  worldvisionHq,
  bahoHospital,
  nisr,
  laCroixDuSud,
  kgpApartment,
  kafamHouse,
  ikazeHouse,
  victoryVilla,
  mininter,
];

const INTERVAL_MS = 5000;

const HeroBackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Preload all images
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover will-change-transform"
            style={{
              animation: i === index ? "hero-kenburns 8s ease-out forwards" : "none",
            }}
            draggable={false}
          />
        </div>
      ))}
      <style>{`
        @keyframes hero-kenburns {
          0% { transform: scale(1.05) translate3d(0, 0, 0); }
          100% { transform: scale(1.15) translate3d(0, -1%, 0); }
        }
      `}</style>
    </div>
  );
};

export default HeroBackgroundSlideshow;