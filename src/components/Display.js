import React, { Component } from 'react'
import '../App.css';

import {connect} from 'react-redux'

class Display extends Component {
    render() {
        return (
            <div>
                <div className="operationHistory">{this.props.operationHistory}</div>
                <div className="result">{this.props.display}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        display: state.display,
        operationHistory: state.operationHistory,
    }
}

export default connect(mapStateToProps)(Display)