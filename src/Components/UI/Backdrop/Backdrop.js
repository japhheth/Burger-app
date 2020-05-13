import React from 'react'
import classes from './Backdrop.css'

const backDrop = (props) => (
    props.showBackdrop ? <div className={classes.Backdrop} onClick={props.closeModal}></div> : null
)


export default backDrop;