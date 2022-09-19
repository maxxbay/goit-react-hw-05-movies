import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <h1>
      Sorry - error 404 : PAGE NOT FOUND
      <Link to="/">HomePage</Link>
    </h1>
  );
}

export default NotFoundPage;
