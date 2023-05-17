import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
import { ImageData } from "./Images.type";
import { Card } from "./components/Card";
import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";

function App() {
  const [popularImages, SetPopularImages] = useState([]);
  const [searchedImages, SetSearchedImages] = useState([]);
  const [nbrImgToLoad, setNbrImgToLoad] = useState<number>(28);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState();

  const handleLoadMore = () => {
    setNbrImgToLoad((prevState) => prevState + 20);
  };

  const handleSearchBar = (value: string) => {
    setSearchValue(value);
  };
  const ModalClick = (imgInfo) => {
    setDisplayModal((prevState) => !prevState);
    setSelectedInfo(imgInfo);
  };
  const closeModal = () => {
    setDisplayModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (searchValue !== "") {
      setIsLoading(true);
      axios
        .get(`http://localhost:8000/searchImages/query=${searchValue}`)
        .then((response) => {
          SetSearchedImages(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      axios
        .get(`http://localhost:8000/getImages/${nbrImgToLoad}/`)
        .then((response) => {
          SetPopularImages(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [nbrImgToLoad, searchValue]);

  return (
    <>
      <Header />
      <HeroSearch searchValue={handleSearchBar} />
      <Modal
        display={displayModal}
        handleClick={ModalClick}
        selectedInfo={selectedInfo}
        closeModal={closeModal}
      />
      <section className="mx-8">
        <h3 className="font-sans text-2xl font-medium text-grey-500 mb-8">
          {searchValue === ""
            ? "Popular Images"
            : `"${searchValue.charAt(0).toUpperCase()}${searchValue.slice(1)}"`}
        </h3>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 pt-2 gap-6">
            {(searchValue === "" ? popularImages : searchedImages).map(
              (info: ImageData) => (
                <Card key={info.id} info={info} ModalClick={ModalClick} />
              )
            )}
          </div>
        )}
      </section>
      <div className="flex justify-center m-8">
        {(popularImages.length > 0 || searchedImages.length > 0) && (
          <button
            onClick={handleLoadMore}
            className="bg-white border-solid border-2 border-splash-pink rounded-xl text-splash-pink font-semibold px-4 py-1 font-sans "
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default App;
