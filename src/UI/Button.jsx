import { Link } from "react-router-dom";

//could use children prop here to pass text/link inside the button instead of doing this way
export const Button = ({ routeLocation, children }) => {
  return (
    <div>
      <Link to={`/${routeLocation}`}>
        <p>
          <span>{children}</span>
        </p>
      </Link>
    </div>
  );
};
