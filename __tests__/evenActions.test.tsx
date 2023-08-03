// Import necessary libraries
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import App from '../App';// Assuming this is the file containing your App component

describe('App', () => {
  it('should log "xmnbvcxcx" when the button is pressed', () => {
    const {getByText} = render(<App />);
    const button = getByText('Login with Facebook');

    // Simulate the button press
    fireEvent.press(button);

    // Check if the console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith('logpressed');
  });
});
console.log = jest.fn();
