import React from "react";
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props)=> {
    return(
        <div className={classes.dialog}>
            <div>
                <NavLink to={'/dialogs' + props.id}>{props.name}</NavLink>
            </div>
            <img src={props.avatar}/>
        </div>
    )
}
export default Dialog;