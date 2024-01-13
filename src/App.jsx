import postData from "./data/posts.json";



function App() {
  console.log(postData);
  return (


    <main className="container">
      <div className="row" />
      <div> </div>
          
          <div className="card mb-3">
            <img src="/images/seattle.jpg" className="card-img-" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">A sunny day in Seattle</h5>
              <p className="card-text">Seattle</p>
            </div>
          </div>

        
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Travel Blog
    
    </a>
    
    
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Popular posts</a>
        </li>
      </ul>
      <span class="navbar-text">
        
      </span>
    </div>
  </div>
</nav>
    
    <header>
      <h3>
      Travel is the only thing you buy that makes you richer...
      </h3>
    </header>
    <br></br>

    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Search post by location</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="input-text"/>
    </div>
  </div>

    <br></br>
      <button className="btn"> Posts by location</button>
      
      <ol class="list-group list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Seattle</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Shibuya</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Chicago</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">2</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">San Francisco</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">San Diego</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Sevilla</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Porto</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Burano</div>
      
    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>

</ol>

<footer className="bg-warning text-center text-lg-end text-black">
  <h6>Contact Me</h6>
  <h6>About the author</h6>
  <p>copyright My Travel Blog 2020</p>
</footer>
     
   </main>
  );
}

export default App;
