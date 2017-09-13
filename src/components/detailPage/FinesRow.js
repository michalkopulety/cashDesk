import React from "react";
import { Table, Thumbnail, Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const parseDate = (dateString) => {

    const date = new Date(dateString);
    var dateString = date.getUTCDate();
    dateString += "." + date.getUTCMonth();
    dateString += "." + date.getUTCFullYear();
    
    return dateString; 
};

class FinesRow extends React.Component{
  render () {
    const {fine} = this.props;
    
    return(
      <tr>
        <td>1</td>
        <td>{fine.type}</td>
        <td>{fine.amount + " " + fine.currency}</td>
        <td>{parseDate(fine.date)}</td>
      </tr>
    )
  }
};

FinesRow.propTypes = {
  fine: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default FinesRow;