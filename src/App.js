import { useEffect, useState } from "react";
import "./App.css";
import ContentCard from "./ContentCard";
import LazyCard from "./LazyCard";
import Pagination from "./Pagination";

function App() {
  const [load, setLoad] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const NUMBER_OF_ITEM_PER_PAGE = 5;
  const info = [
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "This is Skelleton",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

  useEffect(() => {
    let interval = setTimeout(() => {
      setLoad(true);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const indexOfLastPost = currPage * NUMBER_OF_ITEM_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - NUMBER_OF_ITEM_PER_PAGE;
  const currPost = info.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <header>
        <h2>Skeleton Loading</h2>
      </header>
      <div className="cards">
        {load ? (
          <>
            {currPost.map((el) => (
              <ContentCard info={el} />
            ))}
            <Pagination
              totalItem={info.length}
              curPage={currPage}
              setCurrPage={setCurrPage}
              numItemPerPage={NUMBER_OF_ITEM_PER_PAGE}
            />
          </>
        ) : (
          <>{Array(currPost.length).fill(<LazyCard />)}</>
        )}
      </div>
    </div>
  );
}

export default App;
