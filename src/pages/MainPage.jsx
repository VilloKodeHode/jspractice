import GridLayout from "../components/Layout";
import NavBlock from "../components/Navigation/NavBlock";

export default function MainPage() {
  return (
    <div className="grid gap-12 grid-flow-col justify-center items-center">
      <NavBlock name="MemberList" link="memberlist" />
      <NavBlock name="PokeAPI" link="pokeapi" />
    </div>
  );
}
