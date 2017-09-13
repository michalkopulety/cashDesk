import React from "react";
import { Col, Thumbnail, Button} from "react-bootstrap";
import PropTypes from 'prop-types';

class Card extends React.Component {
    render(){
        const {player} = this.props;

        return (
            <Col xs={6} md={4}>
                <Thumbnail src={"." + player.src} alt={player.firstName + player.lastname} key={player.id}>
                    <div className="card">
                        <h4>{player.firstName}</h4>
                        <h3>{player.lastname}</h3>
                    </div>
                    
                    <p>Description</p>
                    <p>
                        <Button href={"player/" + player.id} bsStyle="primary">Show details</Button>
                    </p>
                </Thumbnail>
            </Col>
        )
    }
    
}

Card.propTypes = {
    player: PropTypes.shape({
        src: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
}

export default Card
