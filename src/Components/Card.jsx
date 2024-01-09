import images from "../images"

const Card = ({post}) => {
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

 //CORRECT: images["san-francisco"] - when the property name contains special characters, spaces, or hyphens, you must use bracket notation
//INCORRECT: images.san-francisco -  would be treated as subtracting 'francisco' from images.san

            case "San Francisco":
                return images["san-francisco"]
            case "Seattle":
                return images.seattle
            case "Sevilla":
                return images.sevilla
            case "Shibuya":
                return images.shibuya
            default: 
                return ""
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
            <p className="card-subtitle mb-2 text-body-secondary">{post.location}</p>
            <p className="card-text text-truncate">{post.content}</p>
            <div className="float-end me-1">

            <button className="btn btn-warning btn-sm ">Go to post </button>
            </div>
        </div>
    </div>
  )
}

export default Card