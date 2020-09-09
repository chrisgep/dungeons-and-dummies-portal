import React, { useState, useEffect } from 'react';
import {Container, Image, Col, Row, Button} from 'react-bootstrap';
import * as Constants from '../../shared/constants';
import { Link } from "react-router-dom";
import './selectedRace.scss';

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
    
    return (
        <div class='raceContainer'>
            <Container className='titleContainer'>
                <h1 className='text-gradient-lightText'>
                    [Race Name]
                </h1>
                <Row className='justify-content-center'>
                    <Col className={`selectedRaceText`} xs={11} sm={11} md={11} lg={6} xl={6}>
                        <p>Text information giving a breif discription of the chosen race and what
                        they are all about. It should probably go on for about as long as this
                        paragraph of information does. Maybe some stuff about their perks, but
                        not getting into the stats, like humans get bonusus to any of their chosen
                        abilities.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='raceListContainer mb-3'>
                <Row className='raceImageRow justify-content-center'>
                    <Image className={`chosenRaceImage bg-gradient-human`} src={require(`../../images/human.png`)} fluid />
                </Row>
                <Row className='buttonRow mt-4 justify-content-center'>
                    <Link to="/" >
                        <button className={`backButton mx-1`} size="lg">⇦ Back</button>{' '}
                    </Link>
                    <button className={`nextButton mx-1`} size="lg">Next ⇨</button>{' '}
                </Row>
            </Container>
        </div>
    );
  }

  export default RaceSelection;