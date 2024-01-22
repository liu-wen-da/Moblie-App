import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SigninScreen from "./SigninScreen";



globalThis.newTime = 0;

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
        navigate: jest.fn(),
        }),
    };
    }
);

// Mock the fetch function to simulate the API call
global.fetch = jest.fn((url, options) => {
    const { email, password } = JSON.parse(options.body);
    if (email === 'admin@gmail.com' && password === 'ikelos437') {
      return Promise.resolve({ text: () => 'success' });
    } else {
      return Promise.resolve({ text: () => 'error' });
    }
  });

  describle('SigninScreen', () => {
    afterEach(()=> {
        jest.clearAllMocks();
    });


    it('render the screen and login correctly', async () =>{
        const { getByPlaceholderTExt, getByText } = render(<SigninScreen/>);
        const emailInput = getByPlaceholderTExt('Email');
        const passwordInput = getByPlaceholderTExt('Password');
        const signinButton = getByText('Login');

        fireEvent.changeText(emailInput, 'admin@gmail.com');
        fireEvent.changeText(passwordInput, 'ikelos437');
        fireEvent.press(signinButton);

        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes());
    })
    
});
