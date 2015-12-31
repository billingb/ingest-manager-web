import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Example from '../components/example'
import * as NameActions from '../actions/name'

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NameActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)