import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
import { ImageData } from "./Images.type";
import { Card } from "./components/Card";
import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";
import { LoadButton } from "./components/LoadButton";
import { Footer } from "./components/Footer";
import { Suggestions } from "./components/Suggestions";

const URL = import.meta.env.PROD
  ? "https://splashseeker-backend.onrender.com"
  : "http://localhost:8000";

function App() {
  const [popularImages, setPopularImages] = useState([]);
  const [searchedImages, setSearchedImages] = useState<any>([]);
  const [searchPage, setSearchPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<ImageData | any>();

  const nbrImgToLoad = 28;

  const handleSearchBar = (value: string) => {
    setSearchValue(value);
  };
  const ModalClick = (imgInfo: ImageData) => {
    setDisplayModal((prevState) => !prevState);
    setSelectedInfo(imgInfo);
  };
  const closeModal = () => {
    setDisplayModal((prevState) => !prevState);
  };
  const handleClickSearchSuggestions = (e: React.MouseEvent<HTMLLIElement>) => {
    const suggestionValue = (e.target as HTMLLIElement).innerText;
    setSearchValue(suggestionValue);
  };

  useEffect(() => {
    if (searchValue !== "") {
      setIsLoading(true);
      axios
        .get(`${URL}/searchImages/${searchValue}/${searchPage}`)
        .then((response) => {
          setSearchedImages((prevSearchedImages: any) => [
            ...prevSearchedImages,
            ...response.data.results,
          ]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      axios
        .get(`${URL}/getImages/${nbrImgToLoad}/`)
        .then((response) => {
          setPopularImages(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [nbrImgToLoad, searchValue, searchPage]);

  return (
    <>
      <Header />
      <HeroSearch searchValue={handleSearchBar} />
      <Suggestions searchTerm={handleClickSearchSuggestions} />
      <Modal
        display={displayModal}
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
          <Loading>Please wait, this will only take a few seconds</Loading>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 pt-2 gap-6">
            {(searchValue === "" ? popularImages : searchedImages)?.map(
              (info: ImageData, index: number) => (
                <Card
                  key={`${info.id}-${index}`}
                  info={info}
                  ModalClick={ModalClick}
                />
              )
            )}
          </div>
        )}
      </section>
      <LoadButton
        searchedImages={searchedImages}
        setSearchPage={setSearchPage}
      />
      <Footer />
    </>
  );
}

export default App;
