import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <Nav />
    <Hero posts={postData}/>
    <Footer />
    </>
  );
}

export default App;
