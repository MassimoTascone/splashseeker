interface SuggestionsProps {
  searchTerm: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const searchTerms = [
  "Beach",
  "Sunset",
  "Mountains",
  "Cityscape",
  "Wildlife",
  "Flowers",
  "Food",
  "Art",
  "Architecture",
  "Fashion",
  "Sports",
  "Cars",
  "Technology",
  "Pets",
  "Nature",
  "Waterfall",
  "Stars",
  "Clouds",
  "Skyline",
  "Festivals",
  "Concerts",
  "Museums",
  "Landscapes",
  "Animals",
  "Underwater",
  "Sunrise",
  "Hiking",
  "Biking",
  "Kayaking",
  "Sailing",
  "Camping",
  "RVing",
  "Snowboarding",
  "Skiing",
  "Surfing",
  "Fishing",
  "Hunting",
  "Gardening",
  "Cycling",
  "Running",
  "Yoga",
  "Dancing",
  "Reading",
  "Writing",
  "Cooking",
  "Baking",
  "Gaming",
  "Movies",
];

const randomSearchTerms = searchTerms.sort(() => Math.random() - 0.5);

export function Suggestions({ searchTerm }: SuggestionsProps) {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
      <li className="text-gray-700 bold text-sm">Suggestions: </li>
      {randomSearchTerms.slice(0, 6).map((term, index) => (
        <li
          className="text-splash-pink hover:text-splash-pink-dark cursor-pointer"
          onClick={searchTerm}
          key={index}
        >
          {term}
        </li>
      ))}
    </ul>
  );
}
