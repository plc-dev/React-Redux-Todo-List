import React from "react";

export class NotizList extends React.Component {

    constructor() {
        super()

        this.state = {
            inputValue: "",
            idCounter: 0,
            items: [
            ]
        }
    }


    deleteItem (idToDelete) {
        const newItems = this.state.items.filter(item => item.id !== idToDelete)
        this.setState({
            items: newItems
        })
    }


    addItem = () => {
        const newId = this.state.idCounter + 1

        const newItem = {
            id: newId,
            value: this.state.inputValue
        }

        const newItems = [...this.state.items, newItem]

        this.setState(oldState => {
            return {
                items: newItems,
                inputValue: "",
                idCounter: oldState.idCounter + 1,
            }
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
                        this.state.items.map(item => {
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


const NotizItem = (props) => {

    const wert = props.value;

    return (
        <div>
            { wert }
            <button onClick={props.deleteFunction}>X</button>
        </div>
    )
}