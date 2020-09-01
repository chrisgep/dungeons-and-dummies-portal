import React, { useState, useEffect } from 'react';
import {Container, Image, Col, Row} from 'react-bootstrap';
import * as Constants from '../../shared/constants';
import Gradients from '../../shared/gradients.scss';
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
        <Col className={`raceCol`} xs={4} sm={4} md={4} lg={4} xl={4} key={race.index}>
            <Image className={`raceImage bg-gradient-${race.index}`} src={require(`../../../images/${race.index}.png`)} fluid />
                <div class="text">{race.name.toUpperCase()}</div>
        </Col>
    );
    return (
        <div class='raceContainer'>
            <Container className='titleContainer'>
                <h1 className='text-gradient-lightText'>
                    Select a Race
                </h1>
            </Container>
            <Container className='descContainer'>
                <p className='text-gradient-lightText'>
                    From the nimble halfings to the towering half-orcs, there is a race for everyone.
                </p>
            </Container>
            <Container className='raceListContainer'>
                <Row className='raceImageRow'>
                    {listItems}
                </Row>
            </Container>
        </div>
    );
  }

  export default RaceSelection;