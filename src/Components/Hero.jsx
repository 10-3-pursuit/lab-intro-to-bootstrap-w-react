
const Hero = () => {
  return (
    <div className="container-fluid" id="hero">
      <img src={heroRoses} className="img-fluid" alt="many roses" />
      <h2>Give the Gift of Roses</h2>
      <span>
        Photo by &nbsp;
        <a href="https://unsplash.com/@prettyspecial?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Lauza Loistl
        </a>
        &nbsp; on &nbsp;
        <a href="https://unsplash.com/s/photos/roses?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
  )
}

export default Hero