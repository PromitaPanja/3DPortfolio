import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src="src\assets\theme_pattern.svg" alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt=""/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src="src\assets\arrow_icon.svg" alt="" />
            </div>
    </div>
  )
}

export default MyWork