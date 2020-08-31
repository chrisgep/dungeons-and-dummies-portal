import React, { useState, useEffect } from 'react';
import * as Constants from '../shared/constants';

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
        <li key={race.index}>
            {race.name}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
  }

  export default RaceSelection;