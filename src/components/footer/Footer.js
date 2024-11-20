import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({
            content: event.target.value
        })
    }
    render() {
        return (
            <footer>
                <input id="content" type="text" placeholder="what you have to do..." value={this.state.content} onChange={this.handleChange} />
                <span id="add-btn" onClick={() => this.props.createItem(this.state.content)}>Add</span>
            </footer>
        );
    }
}

export default Footer;
