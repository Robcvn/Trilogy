import GalleryCard from "./GalleryCard";
import GalleryData from "../GalleryData";

export default function GalleryCardGrid({ properties }) {
    // Use passed properties or default to all GalleryData
    const displayProperties = properties || GalleryData;
    
    const gCards = displayProperties.map((item, index) => {
        return(
            <GalleryCard
                key={index}
                data={item}
                count={index + 1}
                {...item}
            />
        )
    });
    
    return(
        <div className="gallery-grid-wrapper">
            <div className="gallery-grid">
                {gCards}
            </div>
        </div>
    );
}