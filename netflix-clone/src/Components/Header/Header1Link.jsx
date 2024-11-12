import React from 'react'
import { Link } from 'react-router-dom';

const Header1Link = ({linkName, name}) => {
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={linkName}>
        {name}
      </Link>
    </li>
  )
}

export default Header1Link