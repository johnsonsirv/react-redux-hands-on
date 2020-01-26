import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/action';

const mapDispatchToProps = dsipatch => ({
  onSubmit: text => {
    dsipatch(addTodo(text));
  },
});

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ text: input.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { onSubmit } = this.props;
    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form>
        <input value={text} type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit} type="button">
          Save
        </button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddTodo);
