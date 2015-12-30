import flux from 'control';
import DummyActions from 'actions/dummyActions';

class DummyStore {
  constructor() {
    this.bindListeners({
      updateName: DummyActions.updateName
    });

    this.name = 'awesome';
  }

  updateName(name) {
    this.name = name;
  }
}

export default flux.createStore(DummyStore, 'DummyStore');