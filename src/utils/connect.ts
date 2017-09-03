import { connect as reduxConnect } from 'react-redux'

function connect(mapStateToProps, mapDispatchToProps?, mergeProps?, options?) {
  return target => (reduxConnect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export {
  connect
}
