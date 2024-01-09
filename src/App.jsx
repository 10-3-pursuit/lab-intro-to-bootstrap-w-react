import Nav from "./Components/Nav";
import Posts from "./Components/Posts";
import postData from "./data/posts.json";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav/>
      <Header/>
      <Posts posts = {postData}/>
      <button className="btn">hi</button>
      <Footer/>
    </main>
  );
}

export default App;
