import React from 'react'
import './AreaOfPractices.css'
import business from "../../assets/businessLaw.svg"
import partnership from "../../assets/partnership.svg"
import realestate from "../../assets/realestate.svg"
import landlord from "../../assets/landlord.svg"
import elderabuse from "../../assets/elderabuse.svg"


const AreaOfPractices = () => {
    return (
        <div className='practice'>
            <h1>Area of Practices</h1>
            <div className='imgcontainer'>
                <div className='grid'>
                    <div style={{ position: "relative" }}>
                        <img className='bigimage' src={business} alt="asmazabeen13@gmail.com" />
                        <p className='under'>BUSINESS LAW</p>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img className='smallimage' src={partnership} alt="asmazabeen13@gmail.com" />
                        <p className='under'>PARTNERSHIP LAW</p>
                    </div>
                </div>
                <div className='grid'>
                    <div style={{ position: "relative" }}>
                        <img className='smallimage' src={realestate} alt="asmazabeen13@gmail.com" />
                        <p className='under'>REAL ESTATE LAW</p>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img className='bigimage' src={business} alt="asmazabeen13@gmail.com" />
                        <p className='under'>BUSINESS LAW</p>
                    </div>
                </div>
                <div className='grid'>
                    <div style={{ position: "relative" }}>
                        <img className='bigimage' src={landlord} alt="asmazabeen13@gmail.com" />
                        <p className='under'>LANDLORD DISPUTES</p>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img className='smallimage' src={elderabuse} alt="asmazabeen13@gmail.com" />
                        <p className='under'>ELDER ABUSE</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AreaOfPractices
