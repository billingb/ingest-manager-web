import React from 'react';
import { connect } from 'alt-react'
import DummyStore from 'stores/dummyStore';
import DummyActions from 'actions/dummyActions';

@connect
class Example extends React.Component {
  listenTo() {
    return [DummyStore];
  }

  getProps() {
    return {name: DummyStore.getName()};
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.name} onChange={this.onChange}/>
        <h1>It works: {this.props.name}</h1>
      </div>
    );
  }

  onChange = evt => {
    DummyActions.updateName(evt.target.value);
  }
}

export default Example;