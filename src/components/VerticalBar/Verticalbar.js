import './Verticalbar.css';
import Verticalnavbar from '../VerticalNavbar/Verticalnavbar';
import React, {Component} from 'react';

class Verticalbar extends Component {
    render() {
        return (
            <section className="sideBar">
                <Verticalnavbar />
                <div className="copyright">
                    <h3>Copyright, SportSee 2021</h3>
                </div>
            </section>
        )
    }
}

export default Verticalbar;
