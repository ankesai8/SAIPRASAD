import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title" style={{fontFamily:"Changa",fontSize:"1.5em"}}>Backend Developer</h3>

        <div className="skills__box">

        {/*==========GROUP 1======*/}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>Node.js</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>MongoDB</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>PostMan</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>
            </div>

        {/*==========GROUP 2======*/}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>Express.js</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>AWS</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"style={{fontFamily:"Changa"}}>NPM</h3>
                        <span className='skills__level'style={{fontFamily:"Changa"}}>Advanced</span>
                    </div>
                </div>

                {/* <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div> */}
            </div>

        </div>

    </div>
  )
}

export default Backend