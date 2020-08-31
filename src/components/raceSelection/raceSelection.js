import React, { useState, useEffect } from 'react';
import {Container, Image, Col, Row} from 'react-bootstrap';
import * as Constants from '../../shared/constants';
import Colors from '../../shared/colors';
import './raceSelection.scss';

function RaceSelection(props) {
    const [races, setRaces] = useState([]);
    
    useEffect(() => {
        fetch(Constants.baseDnD5eAPI + 'races')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
        
                // Examine the text in the response
                response.json().then(function(data) {
                    setRaces(data.results);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    });
    
    const listItems = races.map((race) =>
        <Col xs={6} md={4} className='raceRow' key={race.index}>
            <Image className={'raceImage' + ' bg-gradient-' + race.index} src={require(`../../../images/${race.index}.png`)} fluid />
        </Col>
    );
    return (
        <Container>
            <Row >
                {listItems}
            </Row>
        </Container>
    );
  }

  export default RaceSelection;