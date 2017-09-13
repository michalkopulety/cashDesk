import React from "react";
import { Table, Thumbnail, Button} from "react-bootstrap";
import FinesRow from "./FinesRow.js";
import PropTypes from 'prop-types';

const FinesTable = ({fines}) => (
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
            {fines.map((fine) => {
                return (
                    <FinesRow fine={fine} key={fine.date + "_" + fine.type}/>
                );
            })}    
        </tbody>
    </Table>
)

FinesTable.propTypes = {
    fines: PropTypes.array.isRequired
  };

export default FinesTable
