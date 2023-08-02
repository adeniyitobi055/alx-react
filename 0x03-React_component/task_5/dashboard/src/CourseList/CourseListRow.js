import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const renderHeaderCell = () => {
    if(textSecondCell === null) {
      return (
        <tr>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
        );
      }
  };
  const renderTableCell = () => {
    return (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
      );
  };

  return (
    <tr>
      {isHeader ? renderHeaderCell() : renderTableCell()}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  textSecondCell: null,
};

export default CourseListRow;