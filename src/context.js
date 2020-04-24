import React from 'react';

// Need separate file for context to avoid
// circular dependency
export const ScoreContext = React.createContext({
    score: 0,
    increment: () => {},
    decrement: () => {}
  });