import React from 'react'
import "./SubProject.css"
import "./SubProject"
const SubProject = (props) => {
  return (
    <div className='Project-Container'>
        <div className='Project-Card'>
            <div className='p-header'>
                <h1>{props.header}</h1>
            </div>
            <div className='p-image'>
                <img src={props.proImg1} alt="Image1" />
            </div>
            <div className='p-bottom'>
                <h1 className='cde'>{props.button1}</h1>
                <h1 className='cde'>{props.button1}</h1>
            </div>
        </div>
    </div>
  )
}

export default SubProject