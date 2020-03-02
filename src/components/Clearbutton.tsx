import React from 'react';

const Clearbutton = (props:any) => {
    return (
        <div onClick={props.handleClear} className="clear-btn">
            {props.children}
        </div>
    );
};

export default Clearbutton;