import React, { Component } from 'react'

import {connect} from 'react-redux'

class Button extends Component {

    actionOnClick = () => {
        switch(this.props.type){
            case 'number':
                if (!this.props.addingNumber) {
                    this.props.dispatch({type: "ERASE_DISPLAY", payload: false})
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
                    this.props.dispatch({type: "SHOW_OPERATION", payload: this.props.text})
                    this.props.dispatch({type: "SHOW_RESULT"})
                } else {
                    this.props.dispatch({type: "SHOW_OPERATION", payload: this.props.text})
                    this.props.dispatch({type: "DO_OPERATION", payload: this.props.text})
                    this.props.dispatch({type: "SHOW_RESULT"})
                }
                break
            case 'clear':
                if (this.props.display != 0) {
                    this.props.dispatch({type: "ERASE_DISPLAY", payload: true})
                } else {
                    this.props.dispatch({type: "ERASE_ALL"})
                }
                break
        }
    }

    styleButton() {
        switch(this.props.type){
            case 'number':
                return "btn btn-secondary"
            case 'dot':
                return "btn btn-secondary"
            case 'operator':
                if (this.props.text == "="){
                    return "btn btn-success"
                }
                return "btn btn-primary"
            case 'clear':
                return "btn btn-danger"
        }
    }

    render() {
        return (
            <button onClick={this.actionOnClick} className={this.styleButton()}>
                {this.props.text}
            </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        display: state.display,
        result: state.result,
        addingNumber: state.addingNumber
    }
}

export default connect(mapStateToProps)(Button)
