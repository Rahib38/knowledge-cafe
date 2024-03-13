import "./App.css";
import Blogs from "./Compotant/Blogs/Blogs";
import Bookmarks from "./Compotant/Bookmarks/Bookmarks";
import Header from "./Compotant/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
