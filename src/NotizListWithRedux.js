import React from "react";

import { connect } from "react-redux"
import {addItem, removeItem} from "./notiz_reducer";


const NotizItem = (props) => {
    const wert = props.value;

    return (
        <div>
            { wert }
            <button onClick={props.deleteFunction}>X</button>
        </div>
    )
}

class NotizList extends React.Component {

    constructor() {
        super()

        this.state = {
            inputValue: ""
        }
    }


    deleteItem (idToDelete) {
        this.props.removeItem(idToDelete)
    }


    addItem = () => {
        this.props.addItem(this.state.inputValue)
        this.setState({
            inputValue: ""
        })
    }

    updateInput = (event) => {
        const newValue = event.target.value;

        this.setState({
            inputValue: newValue
        })
    }

    render() {
        return (
            <div className="list">
                <h1>Notizen</h1>
                <div>
                    <input type="text" onChange={this.updateInput} value={this.state.inputValue}/>
                    <button onClick={this.addItem}>Add</button>
                </div>


                <ul>
                    {
                        this.props.items &&
                        this.props.items.map(item => {
                            return (
                                <li key={item.id}>
                                    <NotizItem deleteFunction={() => this.deleteItem(item.id)} value={item.value}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: value => dispatch(addItem(value)),
        removeItem: id => dispatch(removeItem(id))
    }
}


export const NotizListRedux = connect(mapStateToProps, mapDispatchToProps)(NotizList)

