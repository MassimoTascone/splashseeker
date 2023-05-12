import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
import { ImageData } from "./Images.type";
import { Card } from "./components/Card";

function App() {
  const [allImages, SetAllImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(28);

  const handleLoadMore = () => {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 5);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/getImages/${loadedImages}`)
      .then((response) => {
        SetAllImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loadedImages]);

  console.log(allImages);

  return (
    <>
      <Header />
      <HeroSearch />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8">
        {allImages.map((info: ImageData) => (
          <Card key={info.id} info={info} />
        ))}
      </section>
      <div className="flex justify-center m-8">
        <button
          onClick={handleLoadMore}
          className="bg-white border-solid border-2 border-splash-pink rounded-xl text-splash-pink font-semibold px-4 py-3 font-sans "
        >
          Load more
        </button>
      </div>
    </>
  );
}

export default App;
