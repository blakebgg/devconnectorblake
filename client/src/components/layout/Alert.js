import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Since we are only using one expression we can get rid of all { return ( <div> </div>)}
// map is like a foreach except it returns something, we're going to return some jsx for each result

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// we use state and map it to whatever we want from root reducer which is index &
// we'll have props.alerts avalaile to use, we destructured props and changed to alerts

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
