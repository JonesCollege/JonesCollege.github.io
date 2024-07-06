import React from 'react'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { MdDownload } from 'react-icons/md'
import { IconContext } from 'react-icons'
import './css/Studentgov.css'
import { PositionCard, CabinetCard, AppointedPosList } from './StudentGovPositions'
import { PresInfo } from './INFO/PresidentInfo'
import { CabinetInfo } from './INFO/CabinetInfo'
import { ElectedPos } from './INFO/ElectedPosInfo'
import { AppointedPos } from './INFO/AppointedPosInfo'
import { OtherPos } from './INFO/OtherPosInfo'
import Footer from '../../Footer'
import { useScrollToTop } from '../../../utility'

const Studentgov = () => {
  const [formClick, setFormClick] = useState(false);
  useScrollToTop()

  return (
    <div>
      <div id='instaicon-wrap'>
        <SocialIcon url='https://www.instagram.com/mary_gibbs_jones_college/?hl=en' fgColor='white' bgColor='rgba(243, 248, 244, 255)' style={{ height: 100, width: 100 }} id='instaicon'/>
      </div>
      
      <h2 id='stugov'>STUDENT GOVERNMENT</h2>
      <div id='presflexrow-bg'>
        <div id='presflexrow'>
          <img src={PresInfo.img} alt='Jones President' id='presimg' />
          <div style={{paddingLeft: '3rem', paddingRight: '3rem'}}>
            <p id='prestitle'>PRESIDENT {PresInfo.year}</p>  
            <h3 id='presname'>{PresInfo.name}, JONES '25</h3>
            <h3 id='presinfo'>Social Policy Analysis & Economics</h3>
            <h3 id='presinfo'>513-282-5201 | jonespresident@rice.edu</h3>
          </div>
        </div>
          <div id='prescontainer'>
            <p id='presintro'>Hey Jones! My name is Yuv, and I'm the Jones president for the 2024-25 school year! <br/><br/> Being a part of Jones these past (almost) 4 years has given me immense pride, fulfillment, and community, and I'm so excited and honored to be your President this year. <br/><br/> As President, my goal is to help create a safe and empowering space where you feel supported in things that excite you, including any challenges you may face in getting to where you want to go. No matter where your passions take you, I hope that Jones can be a part of it. I don’t do this alone — alongside an incredible executive team, A-team, and community of Jonesians, we empower each other to to approach every situation with confidence, compassion, and kindness. Alongside this, we hope to build out our traditions and culture to create impactful experiences for all Jonesians. <br/><br/> College presidents wear a lot of hats, but the role's main responsibilities are to act as a liaison between the college and university administration, represent the will of the college across university government, and steer the goals and direction of the college's government internally. With that being said, the best part of the job is interacting with Jonesians and seeing the passion that all members of our community bring to a wide variety of issues. Whether you are a new student, graduating senior, college alum, or anyone else, I hope that I am accessible enough to act as a helping hand, campus resource guide, or a listener if you just need someone to talk to. Congrats on finding the webpage of the best college at Rice University and, as always, JIBA!!!
              <br></br><br></br>
              - Yuv Sachdeva '25 (he/him)
            </p>
          </div>

      </div>

      <div id='cabpos-flexrow'>
        <div id='aboutcab'>
          <h3 id='cabpos'>CABINET POSITIONS</h3>
          <p id='cabposintro'>The Jones Executive Cabinet is the entirely student-run and student-elected system of college governance. 
            The purpose of Cabinet is to provide an atmosphere of social and intellectual growth in the college, plan college activities, 
            and make sure that Jones runs smoothly. The Cabinet is legislated by the Jones Constitution, and elections are held in the spring. 
          </p>
        </div>
        <div id='cabfb-flexcol'>
          <p>Have any feedback for Cabinet?</p>
          <form target='_blank' action='https://goo.gl/forms/qOgEch2pH41iOdPo2'>
            <button id={formClick ? 'cabfbclick' : ''} onMouseDown={()=>{setFormClick(true)}} onMouseUp={()=>{setFormClick(false)}}>Form Link</button>
          </form>
        </div>
      </div>

      {/* REQUIRES ALL STUDENT GOVERNMENT IMAGES BE PLACED IN PUBLIC > IMAGES */}
      <div id='stugovflexrow'>
        {CabinetInfo.map((stugov, idx) => (
          <CabinetCard name={stugov.name} pronouns={stugov.pronouns} position={stugov.position} major={stugov.major}
                    img={stugov.img} email={stugov.email} shortdesc={stugov.shortdesc} objpos={stugov.objpos}
                    maxsize={stugov.maxsize} key={idx}/>
        ))}
      </div>

      <hr className='govdivide'></hr>

      <div id='electedpos'>
          <h3 className='postitle'>ELECTED POSITIONS 2023-2024</h3>
          <p id='electedposdesc'>are a great way for Jonesians to contribute to life in the college. Anyone is eligible to run
          for these positions and they are voted on by the entirety of the Jones student body.</p>
          <div className='posflexrow'>
            {ElectedPos.map((elected, idx) => (
              <PositionCard title={elected.title} email={elected.email} people={elected.people} key={idx}/>
            ))}
          </div>
      </div>

      <hr className='govdivide'></hr>

      <div id='appointedposheader'>
          <h3 className='postitle'>APPOINTED POSITIONS 2023-2024</h3>
          <p id='appointposdesc'>are another way to get involved. These positions are selected by the President, Chief Justice, 
          IVP, and EVP each year, usually in the spring.</p>
      </div>  
        {AppointedPos.map((pos, idx) => (
        <AppointedPosList position={pos.position} info={pos.info} key={idx}/>
      ))}

      <div id='otherpos' className='postitle'>Other Positions</div>

      <div className='posflexrow'>
        {OtherPos.map((position, idx) => (
          <PositionCard title={position.title} email={position.email} people={position.people} key={idx}/>
        ))}
      </div>

      <div id='constitution'>
        <div id='constflex'>
          <h3 className='postitle'>The Constitution</h3>
          <p id='constitutiontxt'>The Jones Constitution details the laws of our land. It’s the way we make most of our decisions, 
            and how we put people in charge. From room draw procedures to the most eccentric of Presidential duties, 
            the Constitution has got it all. There are over 35 pages of carefully worded text to guide our college’s 
            activity. The College Parliamentarian is responsible for updating and changing the Constitution and 
            its <a id='bylaws' title='https://docs.google.com/document/d/1sBOXhZnGkC-nO3L14g2DziKVOoi6bzKpwv7YbY5eYj8/pub' 
            href='https://docs.google.com/document/d/1sBOXhZnGkC-nO3L14g2DziKVOoi6bzKpwv7YbY5eYj8/pub' target="_blank" 
            rel="noopener noreferrer">Bylaws</a> as 
            he or she sees fit. The Constitution is broken down into six main sections:</p>
          </div>
          <div id='downloadwrapper'>
            <a href='https://docs.google.com/document/d/1BLsb4rq-Fcj2wgF4A0kCxWFqpW3vI1I_s96o3qxUnug/pub' target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ size: 200 }}>
                <MdDownload id='downloadbutton' />
              </IconContext.Provider>
            </a>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Studentgov