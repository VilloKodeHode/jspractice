import GridLayout from "../Layout";
import peopleArray from "./memberList";

export default function Calculate() {
  const ages = peopleArray.map((person) => person.age);
  const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
  const averageAge = (sumOfAges / peopleArray.length).toFixed(1);

  const countries = peopleArray.map((person) => person.country);
  const filteredCountries = countries.filter((country, index) => {
    return countries.indexOf(country) === index;
  });
  const memberCountries = filteredCountries.map((country) => (
    <p key={country} className="text-xl p-2">
      {country}
    </p>
  ));
  const differentCountries = memberCountries.length;

  return (
    <div>
      <h2 className="text-5xl">Getting more information about the members:</h2>
      <GridLayout>
        <div className="h-full flex flex-col justify-center border p-4 m-2">
          <h2 className="text-3xl underline mb-8">Average age of members:</h2>
          <p className="text-9xl">{averageAge}</p>
        </div>
        <div className="h-full border p-4 m-2">
          <h2 className="text-3xl underline mb-8">We have members from:</h2>
          <div className="grid grid-cols-3 gap-6">{memberCountries}</div>
        </div>
        <div className="h-full border p-4 m-2">
          <p className="text-6xl">
            That is
            <span className="text-9xl"> {differentCountries}</span> different
            countries!
          </p>
        </div>
      </GridLayout>
    </div>
  );
}
