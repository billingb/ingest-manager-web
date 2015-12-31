import React, { Component, PropTypes } from 'react'

class Example extends Component {
  //constructor(props, context) {
  //  super(props, context)
  //  this.name = ''
  //}

  render() {
    const {name} = this.props;
    return (
      <div>
        <input type="text" value={name} onChange={this.onChange}/>

        <h1>It works: {name}</h1>
      </div>
    );
  }

  onChange = evt => {
    this.props.setName(evt.target.value);
  }

}

Example.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired
};

export default Example;