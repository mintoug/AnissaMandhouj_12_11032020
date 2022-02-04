import '../Custumtooltipdailyactivity/Custumtooltipdailyactivity.css';
import PropTypes from "prop-types";
import React, {Component} from 'react';

class Custumtooltipdailyactivity extends Component {
    render() {
        const { payload, active } = this.props;

        if (active && payload) {
            return (
                <div className="tooltipContainer">
                    <p className="tooltipLine black">
                        {`${payload[0].value} kg`}
                    </p>
                    <p className="tooltipLine red">
                        {`${payload[1].value} kCal`}
                    </p>
                </div>
        );
    }
        return null;
    }
}

Custumtooltipdailyactivity.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
};

export default Custumtooltipdailyactivity;
