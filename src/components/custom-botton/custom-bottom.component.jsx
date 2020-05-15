import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...oterProps}) =>(
    <button className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...oterProps}>
        {children}
    </button>
);
export default CustomButton;