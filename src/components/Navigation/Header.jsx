import { Link } from "react-router-dom";

//images:
import JWC from "/JWC.png";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full bg-yellow-300 p-12">
      {/* <img src={JWC} className="absolute h-32" /> */}
      <ul className="text-xl">
        <li>
          <Link to="/" className="shadow-xl border-4 border-yellow-200 p-4">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
