export type OptionType = {
    value: string;
    label: string;
  };

export const genres= [
    {
        value: "",
        label: "Any"
    },
    {
      value: "12",
      label: "Adventure"
    },
    {
      value: "16",
      label: "Animation"
    },
    {
      value: "35",
      label: "Comedy"
    },
    {
      value: "80",
      label: "Crime"
    },
    {
      value: "99",
      label: "Documentary"
    },
    {
      value: "18",
      label: "Drama"
    },
    {
      value: "10751",
      label: "Family"
    },
    {
      value: "14",
      label: "Fantasy"
    },
    {
      value: "36",
      label: "History"
    },
    {
      value: "27",
      label: "Horror"
    },
    {
      value: "10402",
      label: "Music"
    },
    {
      value: "9648",
      label: "Mystery"
    },
    {
      value: "10749",
      label: "Romance"
    },
    {
      value: "878",
      label: "Science Fiction"
    },
    {
      value: "10770",
      label: "TV Movie"
    },
    {
      value: "53",
      label: "Thriller"
    },
    {
      value: "10752",
      label: "War"
    },
    {
      value: "37",
      label: "Western"
    }
]

export let Genres = () => {
    return (
        <>
            {genres.map((genre) => <option value={genre.value}>{genre.label}</option>)}
        </>
    )
}

