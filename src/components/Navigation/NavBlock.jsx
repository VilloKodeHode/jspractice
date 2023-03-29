import { Link } from "react-router-dom";

export default function NavBlock(props) {
  const { name, link } = props;
  return (
    <Link to={link}>
      <div className="h-64 w-64 grid bg-yellow-700 items-center shadow-xl rounded-lg">
        <p className="text-3xl">{name}</p>
      </div>
    </Link>
  );
}
