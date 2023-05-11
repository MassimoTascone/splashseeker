import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
import { ImageData } from "./Images.type";

function App() {
  const [allImages, SetAllImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getImages")
      .then((response) => {
        SetAllImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(allImages);

  return (
    <>
      <Header />
      <HeroSearch />
      <section className="grid grid-cols-3 gap-4 mx-8">
        {allImages.map((image: ImageData) => (
          <img src={image.urls.small} alt={image.alt_description} />
        ))}
      </section>
    </>
  );
}

export default App;
