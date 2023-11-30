import { Link, useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
