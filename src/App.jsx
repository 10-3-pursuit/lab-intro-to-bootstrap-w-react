import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";


function App() {
  console.log(postData);
  return (
    // <main>
    //   <button className="btn">hi</button>
    // </main>
    <>
    <Nav />
    <Hero posts={postData}/>
    {/* <Footer /> */}
    </>
  );
}

export default App;
