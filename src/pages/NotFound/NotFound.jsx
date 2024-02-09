import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
