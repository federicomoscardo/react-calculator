import React, { Component } from 'react'

import {connect} from 'react-redux'

class Button extends Component {

    actionOnClick = () => {
        switch(this.props.type){
            case 'number':
                if (this.props.display == 0 || this.props.display == this.props.operand) {
                    this.props.dispatch({type: "ERASE_DISPLAY"})
                }
                this.props.dispatch({type: "RECEIVE_NUMBER", payload: this.props.text})
                break
            case 'dot':
                if (Number(this.props.display) % 1 == 0)
                {
                    this.props.dispatch({type: "RECEIVE_NUMBER", payload: this.props.text})
                }
                break
            case 'operator':
                if (this.props.result == "") {
                    this.props.dispatch({type: "FIRST_VALUE", payload: this.props.text})
                    this.props.dispatch({type: "SHOW_RESULT"})
                    this.props.dispatch({type: "SHOW_OPERATION", payload: this.props.text})
                } else {
                    this.props.dispatch({type: "SHOW_OPERATION", payload: this.props.text})
                    //this.props.dispatch({type: "ERASE_DISPLAY"})
                    this.props.dispatch({type: "DO_OPERATION", payload: this.props.text})
                    this.props.dispatch({type: "SHOW_RESULT"})
                }
                break
        }
    }

    render() {
        return (
            <button onClick={this.actionOnClick}>
                {this.props.text}
            </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        display: state.display,
        result: state.result,
        operand: state.operand
    }
}

export default connect(mapStateToProps)(Button)
