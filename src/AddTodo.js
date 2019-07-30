import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    handleHistori = (e) => {

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Dodaj nową pozycję do listy:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <label></label>
                    <label></label>
                    <label>*kliknij na pozycję aby usunąć</label>
                </form>
            </div>
        )
    }
}

export default AddTodo