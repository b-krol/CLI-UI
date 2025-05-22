import { NavLink } from "react-router-dom";
import { Button } from "rsuite";

export default function ContentExample() {
  return (
    <div className="w-full h-full">
      Content
      <NavLink to="/ContentExample2">
        <Button appearance="ghost">ContentExample 2</Button>
      </NavLink>
    </div>
  );
}
