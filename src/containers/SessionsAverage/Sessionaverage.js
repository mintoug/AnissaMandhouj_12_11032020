import ApiProvider from "../../services/ApiProvider";
import Linechart from "../../components/AllCharts/LineChart/Linechart";
import Loader from '../../components/Loader/Loader';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../../containers/SessionsAverage/Sessionaverage.css';

class Sessionaverage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            userAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserAverageSessionData(this.state.id)
        .then((response) => {
            this.setState({
                loading: false,
                userAverageData: response,
            });
        });
    }

    render() {
        return this.state.loading ? 
        (
            <article className="sessionsLineChart">
                <Loader />
            </article>
        )
        : (
            <article className="sessionsLineChart">
                {this.getHeaderLineChart()}
                <Linechart userAverageData = {this.state.userAverageData} />
            </article>
        )
    }

    // Build Header Line Chart 
    getHeaderLineChart = () => {
        return (
            <header>
                <h2 className="sessionsLineChartTitle">
                    Durée moyenne des
                        <br />
                    sessions
                </h2>
            </header>
        )
    }
}

Sessionaverage.propTypes = {
    id : PropTypes.string.isRequired,
}

export default Sessionaverage;