import postData from "./data/posts.json";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import PostxLocationTable from "./Components/PostsxLocationTable";
import SearchBox from "./Components/SearchBox";

function App() {
  console.log(postData);
  return (
    <>
      <Nav />
      <Header />
      <SearchBox />
      <Post />
      <Posts />
      <PostxLocationTable />
      <Footer />
    </>
  );
}

export default App;
