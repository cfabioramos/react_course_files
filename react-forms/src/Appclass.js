import React, {Component} from "react"

class Appclass extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "Carlos",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <input type="text" 
                    name="firstName" 
                    placeholder="Primeiro Nome" 
                    value={this.state.firstName}
                    onChange={this.handleChange} />
                <br />
                <input type="text" 
                    name="lastName" 
                    placeholder="Último Nome" 
                    value={this.state.lastName}
                    onChange={this.handleChange} />
                <br />
                <h3>{this.state.firstName} {this.state.lastName}</h3>

            </div>
        )
    }
}

export default Appclass
