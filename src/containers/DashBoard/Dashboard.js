import Charts from '../Charts/Charts';
import './Dashboard.css';
import Header from '../../components/Header/Header';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import Verticalbar from '../../components/VerticalBar/Verticalbar';


class Dashboard extends Component {
    state = {
        id : this.props.id,
    }
    render() {   
        return (
            <Fragment>
                <Header />
                <main>
                    <Verticalbar />
                    <Charts id={this.state.id} />
                    
                </main>
            </Fragment>
        )
    }
}

Dashboard.propTypes = {
    id : PropTypes.string.isRequired,
}

export default Dashboard;