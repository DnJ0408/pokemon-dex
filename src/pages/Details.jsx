import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const img = params.get("img");
    const name = params.get("name");
    const id = params.get("id");

    return (
        <div>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>No.{id.padStart(3, "0")}</p>
        </div>
    );
}

export default Details