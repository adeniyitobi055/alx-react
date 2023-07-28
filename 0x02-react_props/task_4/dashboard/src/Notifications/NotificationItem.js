import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <React.Fragment>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
        {html ? (
          <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
        ) : null}
    </React.Fragment>
  );
};

NotificationItem.PropTypes = {
  html: PropTypes.shape({
    __html:PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;