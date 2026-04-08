import { FaCar, FaTrain, FaBicycle, FaBus } from "react-icons/fa";
function Vervoer() {

    const transportData = [
        { type: "Auto", trips: 8, cost: 36, km: 220 },
        { type: "Trein", trips: 4, cost: 28, km: 100 },
        { type: "Bus", trips: 12, cost: 22, km: 50 },
    ];

    const getIcon = (type) => {
        if (type === "Auto") return <FaCar className="icon" />;
        if (type === "Trein") return <FaTrain className="icon" />;
        if (type === "Fiets") return <FaBicycle className="icon" />;
        if (type === "Bus") return <FaBus className="icon" />;
        return null;
    };

    const totalTrips = transportData.reduce((acc, item) => acc + item.trips, 0);


    return (
        <div className="vervoer">
            <h1>Vervoer</h1>

            {transportData.map((item, i) => {
                const percentage = (item.trips / totalTrips) * 100;

                return (
                    <div className="progress-item" key={i}>

                        <p className="label">
                            {getIcon(item.type)}
                            {item.type} ({item.trips} trips)
                        </p>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: percentage + "%" }}
                            ></div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}



export default Vervoer; 
