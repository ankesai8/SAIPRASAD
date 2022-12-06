import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title"style={{fontFamily:"Changa",fontSize:"1.5em"}}>Frontend Developer</h3>

        <div className="skills__box">

        {/*==========GROUP 1======*/}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>JavaScript</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>HTML</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>Tailwind</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Basic</span>
                    </div>
                </div>
            </div>

        {/*==========GROUP 2======*/}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>React</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>CSS</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>Git/GitHub</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Frontend