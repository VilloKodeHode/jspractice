import GridLayout from "../Layout";
import peopleArray from "./memberList";

export default function Mapping() {
  const mappedOutArray = peopleArray.map(
    ({ id, firstName, lastName, country, age, membership, profilePicture }) => (
      <div
        key={id}
        className="grid gap-8 m-8 p-8 border-4 w-fit h-[90%] rounded-md"
      >
        <div className="text-3xl underline">
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
        </div>
        <img
          src={profilePicture}
          className="border-2 shadow-md hover:shadow-xl hover:scale-110 duration-500 border-gray-200 object-cover aspect-square w-64 rounded-full"
        />
        <div className="text-lg grid gap-4">
          <p>Age: {age}</p>
          <p>Country: {country}</p>
          <p>Membership: {membership}</p>
        </div>
      </div>
    )
  );
  const numberOfMembers = peopleArray.length;

  return (
    <div>
      <h2 className="text-5xl">Mapping a member list:</h2>
      <GridLayout>
        <h2 className="text-3xl col-span-full">
          Current members: {numberOfMembers}
        </h2>
        {mappedOutArray}
      </GridLayout>
    </div>
  );
}
