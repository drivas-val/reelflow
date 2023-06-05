export type OptionType = {
    value: string;
    label: string;
  };

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

export let Languages = () => {
    return (
        <>
            {languages.map((language) => <option value={language.value}>{language.label}</option>)}
        </>
    )
}