import React, { Component } from 'react'
import Welcome from '../../components/Welcome/Welcome'
import ApiProvider from '../../services/ApiProvider'
export default class Charts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            welcomeData : null,
           
        }
        this.apiProvider = new ApiProvider();  
    }
    componentDidMount = () => {
        this.apiProvider
        .getMainData(this.state.id)
        .then((response) => {
            this.setState({
                welcomeData: response.firstName})})}

    render() {
        return (
            <div>
                <Welcome welcomeData={this.state.welcomeData} />
            </div>
        )
    }
}
