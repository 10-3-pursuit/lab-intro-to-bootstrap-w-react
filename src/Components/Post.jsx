import images from "../images";
import Posts from "./Posts";

export default function Post ({post}) {
    console.log("coming from post.jsx", post);
    function getImagePath(post){
        switch(post.location){
            case "Burano":
                return images.burano
            case "Chicago":
                return images.chicago
            case "Dubai":
                return images.dubai
            case "London":
                return images.london
            case "Porto":
                return images.porto
            case "San Diego":
                return images["san-diego"] 
            case "San Francisco":
                    return images["san-francisco"]
            case "Seattle":
                    return images.seattle
            case "Sevilla":
                    return images.sevilla
            case "Shibuya":
                    return images.shibuya
            }
        }
    return (
        <div className="card">
        <img 
            src={getImagePath(post)}
            className="card-img-top" 
            alt={`Image for ${post.location}`} 
        />
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-subtitle">{post.location}</p>
            <p className="card-text text-truncate">{post.content}</p>
            <div>

            <button className="btn btn-warning">Go to post </button>
            </div>
        </div>
    </div>
    )
}