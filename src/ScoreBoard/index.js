import React from 'react';
import { ScoreContext } from '../context';

export default function ScoreBoard() {
    return (
        <ScoreContext.Consumer>
            {v => <h1>{v.score}</h1>}
        </ScoreContext.Consumer>
        
    );
}