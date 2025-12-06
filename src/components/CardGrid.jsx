import React, { useState } from "react";
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

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex < Data.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
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
          previous={Data[selectedIndex - 1]}
          next={Data[selectedIndex + 1]}
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
    </div>
  );
}
