import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...oterProps}) =>(
    <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...oterProps}>
        {children}
    </button>
);
export default CustomButton;