import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        /*
            TODO - set initial state for link name and URL 
        */
        this.state = { name:'', URL:'' }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
        let {name, value} = event.target
        this.setState({ [name]:value })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        this.props.handleSubmit(this.state)
        this.setState({ name:'', URL:'' })

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input type='text' name='name' value={this.state.name} onChange={(event) =>this.handleChange(event)}/> 
                <label>URL</label>
                <input type='text' name='URL' value={this.state.URL} onChange={this.handleChange}/> 
                <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;
