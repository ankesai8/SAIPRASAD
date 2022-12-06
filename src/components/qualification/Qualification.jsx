import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title"style={{fontFamily:"changa"}}>Qualification</h2>
        <span className='section__subtitle'style={{fontFamily:"changa"}}>My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    onClick = {() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon' style={{fontFamily:"changa",fontSize:"1.5em"}}></i>
                    Education
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    onClick = {() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'style={{fontFamily:"changa",fontSize:"1.25em"}}></i>
                    Experience
                </div>
            </div>


            <div className="qualification__sections">
                {/* QUALIFICATION SECTION */}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>                 

                            <h3 className="qualification__title"style={{fontFamily:"changa"}}>Bachelor of Engineering</h3>
                            <h4 className='qualification__subtitle'style={{fontFamily:"changa"}}>🎓 Computer SCience Engineering Graduate .</h4>

                            <span className='qualification__subtitle'style={{fontFamily:"changa"}}>SJCIT - Chickballapur</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'style={{fontFamily:"changa"}}></i> July 2016 - Nov 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"style={{fontFamily:"changa"}}>Intermediate</h3>
                            <span className='qualification__subtitle'style={{fontFamily:"changa"}}> Sri Chaitanya College of Education - Vijayawada</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'style={{fontFamily:"changa"}}></i> June 2014 - Apr 2016
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title"style={{fontFamily:"changa"}}>10th Standard</h3>
                            <span className='qualification__subtitle'style={{fontFamily:"changa"}}>Prasad Concept School - Anantapur</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'style={{fontFamily:"changa"}}></i> Jun 2013 - Apr 2014
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">10th Standard</h3>
                            <span className='qualification__subtitle'>Sri Chaitanya - North Mopur</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Jun 2013 - Apr 2014
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* EXPERIENCE SECTION */}
                <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"style={{fontFamily:"changa"}}>Full Stack Developer  Trainee</h3>
                            <span className='qualification__subtitle'style={{fontFamily:"changa"}}>GUVI Geek Networks, IITM Research Park - Chennai</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'style={{fontFamily:"changa"}}></i> Aug 2021 - Apr 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"style={{fontFamily:"changa"}}>Associate Software developer</h3>
                            <span className='qualification__subtitle'style={{fontFamily:"changa"}}>CStream - Chennai</span>
                            <div className='qualification__calendar'style={{fontFamily:"changa"}}>
                                <i className='uil uil-calendar-alt'style={{fontFamily:"changa"}}></i> Apr 2022 - July 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"style={{fontFamily:"changa"}}>Software Devolopment Engineer</h3>
                            <span className='qualification__subtitle'style={{fontFamily:"changa"}}>CStream - Chennai</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'style={{fontFamily:"changa"}}></i> July 2022  - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Digital Assistant</h3>
                            <span className='qualification__subtitle'>Panchayat Raj - Nellore</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> Dec 2019 - Nov 2021
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    </section>
  )
}


export default Qualification