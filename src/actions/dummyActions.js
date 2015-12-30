import flux from 'control';

class DummyActions {
  updateName(name) {
    return name;
  }
}

export default flux.createActions(DummyActions);