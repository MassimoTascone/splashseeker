import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
import { ImageData } from "./Images.type";
import { Card } from "./components/Card";

function App() {
  const [popularImages, SetPopularImages] = useState([]);
  const [searchedImages, SetSearchedImages] = useState([]);
  const [nbrImgToLoad, setNbrImgToLoad] = useState(28);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadMore = () => {
    setNbrImgToLoad((prevState) => prevState + 20);
    console.log({ afterClick: nbrImgToLoad });
  };

  const handleSearchBar = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      axios
        .get(`http://localhost:8000/searchImages/query=${searchValue}`)
        .then((response) => {
          SetSearchedImages(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`http://localhost:8000/getImages/${nbrImgToLoad}/`)
        .then((response) => {
          SetPopularImages(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [nbrImgToLoad, searchValue]);

  return (
    <>
      <Header />
      <HeroSearch searchValue={handleSearchBar} />
      <section className="mx-8">
        <h3 className="font-sans text-2xl font-medium text-grey-500 mb-8">
          {searchValue === ""
            ? "Popular Images"
            : `"${searchValue.charAt(0).toUpperCase()}${searchValue.slice(1)}"`}
        </h3>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 pt-2 gap-6">
          {
            // display popular imgs
            searchValue === "" &&
              popularImages.map((info: ImageData) => (
                <Card key={info.id} info={info} />
              ))
          }

          {
            // display searched imgs
            searchValue !== "" &&
              searchedImages.map((info: ImageData) => (
                <Card key={info.id} info={info} />
              ))
          }
        </div>
      </section>
      <div className="flex justify-center m-8">
        {
          <button
            onClick={handleLoadMore}
            className="bg-white border-solid border-2 border-splash-pink rounded-xl text-splash-pink font-semibold px-4 py-1 font-sans "
          >
            Load More
          </button>
        }
      </div>
    </>
  );
}

export default App;
