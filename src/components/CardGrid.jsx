import { useState } from "react";
import CompanyCard from "./CompanyCard";
import CompanyModal from "./CompanyModal";
import Data from "../Data";

export default function CardGrid() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  // Navigation wraps around, per design (modal 01 shows PREVIOUS = last member)
  const goToPrevious = () => {
    setSelectedIndex((selectedIndex - 1 + Data.length) % Data.length);
  };

  const goToNext = () => {
    setSelectedIndex((selectedIndex + 1) % Data.length);
  };

  return (
    <div className="card-grid-wrapper">
      <div className="grid-grid"></div>
      <div className="card-grid u-container">
        {Data.map((item, index) => (
          <CompanyCard
            key={item.key}
            {...item}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <CompanyModal
          person={Data[selectedIndex]}
          previous={Data[(selectedIndex - 1 + Data.length) % Data.length]}
          next={Data[(selectedIndex + 1) % Data.length]}
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
    </div>
  );
}
