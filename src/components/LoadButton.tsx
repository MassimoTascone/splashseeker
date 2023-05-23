interface LoadButtonProps {
  searchedImages: any;
  setSearchPage: React.Dispatch<React.SetStateAction<number>>;
}

export function LoadButton({ searchedImages, setSearchPage }: LoadButtonProps) {
  return (
    <div className="flex justify-center m-8">
      {searchedImages.length > 0 && (
        <button
          onClick={() => setSearchPage((prev) => prev + 1)}
          className="bg-white border-solid border-2 border-splash-pink rounded-xl text-splash-pink font-semibold px-4 py-1 font-sans "
        >
          Load More
        </button>
      )}
    </div>
  );
}
