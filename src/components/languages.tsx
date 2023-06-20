export type OptionType = {
    value: string;
    label: string;
  };

  /*    
  Available languages for filter use. 
  API call uses abbreviated value.
  Label is used for option-building
  */

export const languages= [
    {
        value: "101",
        label: "Any"
    },
    {
      value: "en",
      label: "English"
    },
    {
        value: "fr",
        label: "French"
    },
    {
        value: "de",
        label: "German"
    },
    {
        value: "ko",
        label: "Korean"
    },
    {
        value: "ms",
        label: "Malay"
    },
    {
        value: "zh",
        label: "Mandarin"
    },
    {
        value: "pt",
        label: "Protuguese"
    },
    {
        value: "es",
        label: "Spanish"
    },
]

//Mapped languages for use. 
export let Languages = () => {
    return (
        <>
            {languages.map((language) => <option value={language.value}>{language.label}</option>)}
        </>
    )
}