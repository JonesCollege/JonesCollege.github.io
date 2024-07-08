import React, { useState} from 'react'
import Footer from '../../Footer'
import './css/Ateam.css'
import { useResizeWidth, useScrollToTop } from '../../../utility'

const Ateam = () => {
  const [resize, setResize] = useState(false)

  useScrollToTop();
  useResizeWidth(768, setResize);


  return (
    <div>
    <div id='ateam'>
      <div id='ateamintro'>
        <h2>ADULT TEAM</h2>
        <p>Here at Rice, each college has a number of amazing faculty, staff, alumni, and 
          community members that are affectionately referred to as Associates. At Jones, 
          they are the best of the bunch. They cheer on our Powderpuff, sponsor study breaks, 
          and do whatever they can to make your college experience the best it can possibly be.
        </p>
      </div>

      <div className='ateamflex'>
        <img src={require('./INFO/ateam_images/ballfamily.jpg')} alt='Jones Magisters, Zach and Trisha Ball' className='ateamimage' id='magisterimage'></img>
        <div className='ateaminfo'>
          <p className='ateamname'>Zach, Trisha, and Emilia Ball</p>
          <div className='ateamposemail'><span className='ateampos'>Magisters</span><a href='mailto: zb1@rice.edu' className='ateamemail'>zb1@rice.edu</a></div>
          <p className='ateamdesc'>We are Zach and Trisha Ball, and we are honored and thrilled to serve as Magisters at Jones College, 
            a diverse, vibrant community with a storied Beer Bike tradition. We are here to support Jones students 
            throughout their journey at Rice and advise and assist them in running the college.<br></br><br></br>
            Zach is a professor in the Department of Chemistry. At Rice since 2006, his research group focuses on 
            biological applications of organic and organometallic chemistry, including developing new synthetic methods 
            for the preparation of therapeutics, biosensors, and new molecular tools to study biological pathways. He 
            teaches organic and organometallic chemistry, and serves as director of the Institute of Biosciences and 
            Bioengineering. Trisha has worked in writing, editing, and development capacities for academic and other 
            non-profit organizations, including Development and Alumni Relations at Rice.<br></br><br></br>
            Prior to settling in Houston, we lived in the San Francisco Bay Area, where Zach completed graduate and 
            postdoctoral training. We met in Boston as undergraduates at Harvard before jumping coasts to California. 
            Trisha hails from Upstate New York and still aches for crisp fall and winter weather, though curiously 
            didn’t learn to knit until moving to Houston. Zach is a native of Columbus, Ohio, and enjoys cooking, film, and cycling.
          </p>
        </div>
      </div>

      <div className='ateamflex'>
        {resize && <img src={require('./INFO/ateam_images/SagerPic.jpg')} alt='Jones College Coordinator, Kellie Sager' className='ateamimage float-right' id='ccimage'></img>}
        <div className='ateaminfo'>
          <p className='ateamname'>Kellie Sager</p>
          <div className='ateamposemail'><span className='ateampos'>College Coordinator</span><a href='mailto: ks235@rice.edu' className='ateamemail'>ks235@rice.edu</a></div>
          <p className='ateamdesc'>
          Kellie Sager (she/they) is the new College Coordinator for Jones College Started on June 17th. Originally from Dallas.
          <br/><br/>
          She helps manage the college's finances, events and facilities. Kellie's involvement in the many aspects of Jones College life, means she will often be a student's first stop for questions and guidance. She is here to help you through your college years and provide you with a variety of things: your mail, packages from home, stamps, envelopes, faxes, photocopies, answers to your queries, and being the cool aunt providing you with smiles, hugs and a candy treat!
          <br/><br/>
          Outside of work, she stays busy with her husband, four children, dog, and two cats. They share a passion for Renaissance fairs, gaming adventures, and anime marathons as a family. She also likes to indulge her creative side with crafting projects, exploring graphic design, and capturing moments through photography.
          <br/><br/>
          She is very excited to connect with Jonesians and contribute to the growth and success of all students. Just know the office is a fun place to hangout with comfy couches and candy. Stop by anytime to take a break from your busy day! She is here to help and support you on your journey!
          </p>
        </div>
        {!resize && <img src={require('./INFO/ateam_images/SagerPic.jpg')} alt='Jones College Coordinator, Michelle Bennack' className='ateamimage float-right' id='ccimage'></img>}
      </div>

      <div className='ateamflex'>
        <img src={require('./INFO/ateam_images/Kelsey.jpg')} alt='Jones RA, Kelsey Ullom' className='ateamimage' id='southraimage'></img>
        <div className='ateaminfo'>
          <p className='ateamname'>Kelsey Ullom</p>
          <div className='ateamposemail'><span className='ateampos'>Jones South RA</span><a href='mailto: keu1@rice.edu' className='ateamemail'>keu1@rice.edu</a></div>
          <p className='ateamdesc'>
            Kelsey (she/they) is a world-traveling lifelong learner who is starting her first year as the Jones South RA.
            <br/> <br/>
            Originally from Miami, Florida, Kelsey has lived in many different places within the south, mid-west, and eastern United States. As an International Studies 
            major at Ohio Wesleyan University, Kelsey was fortunate to participate in several study abroad opportunities, which convinced her of the power of learning 
            through travel. She has since facilitated service programs in Haiti, administered study abroad programs with the U.S. Department of State, consulted for the 
            United Nations, and earned her master’s degree in International Education from the University of Pennsylvania.
            <br/> <br/>
            Kelsey came to Rice about two years ago. As an Assistant Director at the Center for Civic Leadership, she oversees international programs, including global 
            internships and fellowships. Kelsey loves helping Rice students dream up a travel itinerary and find funding to make their dream a reality. She takes any 
            chance she gets to learn something new about the cultures and traditions that Rice students bring with them from near and far.
            <br/> <br/>
            Kelsey is an avid cyclist and enjoys crafting, reading and writing, trying to play the ukulele, and being outside, preferably near a large body of water. 
            </p>
        </div>
      </div>
      <div className='ateamflex'>
        {resize && <img src={require('./INFO/ateam_images/caitlin.webp')} alt='Jones RA, Caitlin Lindsay' className='ateamimage float-right' id='ccimage'></img>}
        <div className='ateaminfo'>
          <p className='ateamname'>Caitlin Lindsay</p>
          <div className='ateamposemail'><span className='ateampos'>Jones North RA</span><a href='mailto: cml18@rice.edu' className='ateamemail'>cml18@rice.edu</a></div>
          <p className='ateamdesc'>
          We are Caitlin and Calypso and so excited to be a part of the Jones Community. We moved to Houston from Pennsylvania in 2021, but Caitlin is originally from 
          Milwaukee, WI (something you'll quickly recognize when you see how much better she is with the cold, compared to Houston's heat).
          <br/> <br/>
          My Master's Degree is in Higher Education Administration from St. Cloud State, meaning I went to school specifically to learn strategies for working at a 
          university and advising/supporting students. At Rice, I am the Associate Director of Facilities, Events, and Student Run Businesses in the Student Center. 
          I'm also an Adviser for the Rice Black Women's Association, Instructor for the Critical Dialogues on Diversity course, and am the Chair of the Multiracial 
          Network for a higher education organization called ACPA.  When not working, you can usually find me spending time with Calypso, at the theatre, playing games 
          (video, board, or card), reading, or trying out new restaurants and venues in Houston.
          <br/> <br/>
          Calypso is a Shiba Inu mix Caitlin rescued in 2021. You'll often hear her compared to a cat. She loves to sniff people, and is easily bribed with food, but 
          she's skittish and takes time to warm up to people before she's comfortable being pet.
          <br/> <br/>
          We're excited to get to know all of you! Please do not hesitate to reach out if there's anything you need, ways I can help you to have a better experience 
          at Jones or Rice, or if you just want to chat!
          </p>
        </div>
        {!resize && <img src={require('./INFO/ateam_images/caitlin.webp')} alt='Jones RA, Caitlin Lindsay' className='ateamimage float-right' id='ccimage'></img>}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Ateam