import React, {Component} from 'react'
import '../Welcome/Welcome.css'

class Welcome extends Component {
    render() {
        return (
            <section className="welcome">
                <h1>Bonjour <span className="welcomeTxtColored">{this.props.welwomeData}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
        )
    }
}


export default Welcome;