import {Link} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Iconverticalnavbar extends Component {
    render() {
        return (
            <Fragment>
                <Link to='/'>
                    <img src={this.props.logo} alt="iconVerticalNavBar" className="iconVerticalNavBar"></img>
                </Link>
            </Fragment>
        )
    }
}

Iconverticalnavbar.propTypes = {
    logo : PropTypes.string.isRequired,
}

export default Iconverticalnavbar;

