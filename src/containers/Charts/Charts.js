import ApiProvider from '../../services/ApiProvider';
import React, { Component } from 'react';
import Welcome from '../../components/Welcome/Welcome';
import DailyActivity from '../../containers/DailyActivity/Dailyactivity';
import PropTypes from 'prop-types';class Charts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : 18,
            welcomeData : null,
            goalScoreData : [],
            goalScorePercentage : 0,
            macroTrackerData : [],
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getMainData(this.state.id)
        .then((response) => {
            this.setState({
                welcomeData: response.firstName,
                goalScoreData: [
                    { name: "completed", value: response.userScore, fillColor: "#e60000" },
                    { name: "not-completed", value: 1 - response.userScore, fillColor: "transparent" },
                ],
                goalScorePercentage : response.userScore * 100,
                macroTrackerData: response.macroTracker,
                errorModal: false,
            });
        })
        .catch((error) => {
            this.setState({
                errorModal : true,
                message : error.message,
            })
        })
    }

    render () {
        return (
            <section className="charts">
                <Welcome welcomeData={this.state.welcomeData} />
                <DailyActivity id={this.state.id} />
            </section>
        )
    }}
    Charts.propTypes = {
        id : PropTypes.string.isRequired,
    }
    
    export default Charts;

