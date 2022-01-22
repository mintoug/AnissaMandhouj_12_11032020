import React, {Component} from 'react';
import '../VerticalNavbar/Verticalnavbar.css';

import bike from '../../assets/vertical_nav_bar/biking.png';
import Iconverticalnavbar from '../../components/IconVerticalNavbar/Iconverticalnavbar';
import swim from '../../assets/vertical_nav_bar/swim.png';
import weight from '../../assets/vertical_nav_bar/weight.png';
import yoga from '../../assets/vertical_nav_bar/yoga.png';

class Verticalnavbar extends Component {
    render() {
        return (
            <nav className="sideBarNav">
                <ul className="sideBarUl">
                    <li className="borderLogoSideBar">
                        <Iconverticalnavbar logo={yoga}/>
                    </li>
                    <li className="borderLogoSideBar">
                        <Iconverticalnavbar logo={swim}/>
                    </li>
                    <li className="borderLogoSideBar">
                        <Iconverticalnavbar logo={bike}/>
                    </li>
                    <li className="borderLogoSideBar">
                        <Iconverticalnavbar logo={weight}/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Verticalnavbar;