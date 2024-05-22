import { Link } from 'react-router-dom';
import './NotFound.css';
import notfound from '../../img/404.webp'

function NotFound() {
  return (
    <div className="container">
      <div className='NotFound'><img src={notfound} alt="notfound" className="notfound" /></div>
      <p className="NotFound_txt">
        Oops, go to 
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFound;