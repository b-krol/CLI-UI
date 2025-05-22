import { NavLink } from "react-router-dom";
import { Button } from "rsuite";

export default function ContentExample2() {
  return (
    <div className="w-full h-full">
      Content number 2
      <NavLink to="/">
        <Button appearance="ghost">ContentExample</Button>
      </NavLink>
    </div>
  );
}
