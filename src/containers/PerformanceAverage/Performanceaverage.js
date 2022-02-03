import ApiProvider from '../../services/ApiProvider';
import Radarchart from '../../components/AllCharts/RadarChart/Radarchart';
import Loader from '../../components/Loader/Loader';
import '../PerformanceAverage/Performanceaverage.css';
import PropTypes from 'prop-types';
import React, { Component } from "react";

class PerformanceAverage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            performanceAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserPerformanceData(this.state.id)
        .then((response) => {
            this.setState({
                loading: false,
                performanceAverageData: response,
            });
        });
    }

    render() {
        return (
            <article className="performanceRadarChart">
                {this.state.loading 
                ? <Loader />
                : <Radarchart performanceAverageData={this.state.performanceAverageData} />
                }
            </article>
        )
    }
}

PerformanceAverage.propTypes = {
    id : PropTypes.string.isRequired,
}

export default PerformanceAverage;
