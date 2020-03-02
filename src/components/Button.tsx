import React from 'react';

const isOperator = (val:any) => {
   return !isNaN(val) || val === "." || val === "=";
}
const Button = (props:any) => {

    return (
        <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`} onClick={()=>props.handelClick(props.children)}>
           {props.children}
        </div>
    );
};

export default Button;