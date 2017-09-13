import React from "react";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";
import Card from "./Card.js"

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Grid>
          <Row>
            {this.props.route.data.map((player) => {

                return (
                  <Card player={player} key={player.id}/>
                );

            })}
          </Row>
        </Grid>
      </div>
    );
  }
}
