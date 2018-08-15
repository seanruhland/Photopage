import React, { Component } from 'react';
import Link from 'next/link'
import './Navbar.scss'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.props=props
  }

  render() {
    return (
        <nav>
          <div>
            <Link href="/">
              <a title='Our API'>Home Page </a>
            </Link>
            <Link href="/about">
              <a title='About NextJS'>
                Photo Page
              </a>
            </Link>
            <mark className="badge">PhotoBadge</mark>
          </div>
        </nav>
      )
  }
}

export default Navbar;