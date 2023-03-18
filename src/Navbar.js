import React from "react";

export default class Navbar extends React.Component {
    render() {
        return <nav className='navbar navbar-expand-md'>
            <a className='navbar-brand' href='../public/index.html'>
                Burger Coin
            </a>
            <div className='menu'>
                <ul className='navbar-nav ms-auto text-center'>
                    <li>
                        <a className='nav-link' href='https://www.bk.com/'>Hungry?</a>
                    </li>
                    <li>
                        <a className='nav-link' href='../public/index.html'>Log In!</a>
                    </li>
                    <li>
                        <a className='nav-link' href='https://www.youtube.com/watch?v=FkY2hRCb0PQ'>Suprise...</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}