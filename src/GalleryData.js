import optimaImg from "./assets/images/optima.png";
import volarisImg from "./assets/images/volaris.png";
import nocaImg from "./assets/images/noca.png";
import parkImg from "./assets/images/park.png";
import villasImg from "./assets/images/villas.png";
import mirandaImg from "./assets/images/miranda.png";
import propimg from "./assets/images/propimg.jpg";
import propimg2 from "./assets/images/propimg2.jpg";
import meetingRoom from "./assets/images/meeting-room.png";
import companyDisplayImg from "./assets/images/company-display-img.png";
import residentsImg from "./assets/images/residents-img.png";
import careersImg from "./assets/images/careers-img.png";
import mgmtImg from "./assets/images/mgmt-img.png";
import investmentsBuilding from "./assets/images/investmentsbuilding.png";

export default [
    {
        slug: "optima-old-orchard-woods",
        name: "Optima Old Orchard Woods",
        address: "9739 Woods Drive",
        city: "Skokie, IL",
        status: "current",
        category: "RESIDENTIAL",
        units: 172,
        description: [
            "Optima Old Orchard Woods is a 646-unit condominium tower featuring 172 high-end rental units in Skokie, IL.",
            "The property is located within walking distance of Harms Woods and Old Orchard Woods with direct access to the Edens Expressway. The property features first-class amenities including a resort-style indoor swimming pool, spa, state-of-the-art fitness center, tennis court, party room with catering kitchen, heated indoor parking, and grand courtyard with reflecting pool and fountain. The beautifully constructed homes offer generous floor plans with designer finishes including floor-to-ceiling vistas, private recessed balconies and terraces with breathtaking views of acres of forest and the Chicago skyline, stainless steel appliances, granite countertops, and full-size washer/dryer."
        ],
        img: optimaImg,
        // TODO(user): replace with real gallery photos
        gallery: [optimaImg, meetingRoom, propimg]
    },
    {
        // TODO(user): replace with real content
        slug: "volaris",
        name: "Volaris",
        address: "500 South Grand Avenue",
        city: "Lansing, MI",
        status: "development",
        category: "RESIDENTIAL",
        units: 238,
        description: [
            "Volaris is a 238-unit luxury apartment community under development in the heart of downtown Lansing, MI.",
            "The development brings modern, amenity-rich living to the capital city, with a rooftop lounge, co-working spaces, a fitness center, and ground-floor retail. Residences feature open floor plans, in-unit laundry, and sweeping views of the Grand River and the city skyline."
        ],
        img: volarisImg,
        // TODO(user): replace with real gallery photos
        gallery: [volarisImg, propimg2, companyDisplayImg]
    },
    {
        // TODO(user): replace with real content
        slug: "noca-blu",
        name: "NoCa Blu",
        address: "2340 North California Avenue",
        city: "Chicago, IL",
        status: "current",
        category: "RESIDENTIAL",
        units: 104,
        description: [
            "NoCa Blu is a 104-unit boutique apartment community in Chicago’s vibrant Logan Square neighborhood.",
            "Steps from the California Blue Line stop, the property pairs transit-oriented convenience with designer finishes, a resident lounge, a fitness studio, and a landscaped rooftop deck overlooking the city. Ground-floor retail anchors the building to one of Chicago’s most dynamic corridors."
        ],
        img: nocaImg,
        // TODO(user): replace with real gallery photos
        gallery: [nocaImg, residentsImg, propimg]
    },
    {
        // TODO(user): replace with real content
        slug: "park-205",
        name: "Park 205",
        address: "205 West Touhy Avenue",
        city: "Park Ridge, IL",
        status: "legacy",
        category: "RESIDENTIAL",
        units: 115,
        description: [
            "Park 205 is a 115-unit luxury apartment community in downtown Park Ridge, IL.",
            "Adjacent to Hinkley Park and a short walk from the Uptown Park Ridge shopping district and Metra station, the community offers spacious residences with premium finishes, a club room, an outdoor terrace with grilling stations, and heated garage parking."
        ],
        img: parkImg,
        // TODO(user): replace with real gallery photos
        gallery: [parkImg, meetingRoom, careersImg]
    },
    {
        // TODO(user): replace with real content
        slug: "the-villas-at-northstar",
        name: "The Villas at Northstar",
        address: "2800 Northstar Drive",
        city: "Ann Arbor, MI",
        status: "development",
        category: "RESIDENTIAL",
        units: 168,
        description: [
            "The Villas at Northstar is a 168-unit ranch-style villa community under development on Ann Arbor’s growing north side.",
            "The community offers low-density, single-story living with private entries, attached garages, and generous outdoor space, alongside a resident clubhouse, fitness center, and walking trails connecting to nearby parks and the University of Michigan campus."
        ],
        img: villasImg,
        // TODO(user): replace with real gallery photos
        gallery: [villasImg, mgmtImg, propimg2]
    },
    {
        // TODO(user): replace with real content
        slug: "miranda-apartments",
        name: "Miranda Apartments",
        address: "1550 West Henderson Road",
        city: "Columbus, OH",
        status: "legacy",
        category: "RESIDENTIAL",
        units: 96,
        description: [
            "Miranda Apartments is a 96-unit garden-style community in northwest Columbus, OH.",
            "Set among mature trees minutes from the Ohio State University campus, the community features renovated interiors with modern kitchens, an outdoor pool, and a resident clubhouse, with quick access to Route 315 and downtown Columbus."
        ],
        img: mirandaImg,
        // TODO(user): replace with real gallery photos
        gallery: [mirandaImg, investmentsBuilding, propimg]
    }
];
