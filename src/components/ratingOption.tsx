export type OptionType = {
    value: string;
    label: string;
  };

  /*    
  Available rating options for
  folio Ratings.
  Label is used for option-building
  */

export const ratingOptions= [
    {
        value: "0",
        label: "0"
    },
    {
      value: "1",
      label: "1"
    },
    {
        value: "2",
        label: "2"
    },
    {
        value: "3",
        label: "3"
    },
    {
        value: "4",
        label: "4"
    },
    {
        value: "5",
        label: "5"
    },
]

//Mapped ratings for use. 
export let RatingOptions = () => {
    return (
        <>
            {ratingOptions.map((ratingOptions) => <option value={ratingOptions.value}>{ratingOptions.label}</option>)}
        </>
    )
}