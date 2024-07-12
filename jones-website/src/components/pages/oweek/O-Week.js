import React , { useState } from 'react';
import Modal from "react-modal";
import {MdDownload} from 'react-icons/md'
import CoordCard from './CoordCard';
import GroupCard from './GroupCard';
import Footer from '../../Footer';
import LetterModal from './LetterModal';
import {insertLineBreak, useScrollToTop} from '../../../utility.js'
import { CoordLetter, OWeekGroups, CoordBios, PAAs, Gophers } from './INFO/OWeekDataSheet';
import './css/O-Week.css';
import '../../../App.css';

const OWeek = () => {
    useScrollToTop();
    return (
        <div>
            <div className='oweek-container'>
                <CoordDisplay />
                <WelcomeText />
            </div>
            <AdvisingTeamGrid />
            <AffiliateGrid />
            <OweekBook />
            <Footer/>
        </div>
    )
}

export default OWeek;

const CoordDisplay = () => 
    <div className='coord-display'>
        <div className='coord-row'>
            <div className='coord-column'>
                <CoordCard coord={CoordBios[0]} />
                <CoordCard coord={CoordBios[1]} />
            </div>
            <CoordCard coord={CoordBios[2]} />
        </div>
    </div>;

const WelcomeText = () => {
    const [showLetterModal, setShowLetterModal] = useState(false);

    const openLetterModal = () => {
        setShowLetterModal(true);
    };
    const closeLetterModal = () => {
        setShowLetterModal(false);
    };
    return (
    <div>
        <div className='oweek-text-container'>
            <h1 className='oweek-h1'>
                OWEEK
            </h1>
            <h3 className='oweek-h3'>
                WELCOME FUTURE JONESIANS!
            </h3>
            <div className='oweek-letter-box'>
                <p className='letter-p'>
                    {insertLineBreak(CoordLetter.text)}
                </p>           
            </div>
            <div style={{ textAlign: 'center' }}>
                <button className='open-letter-text' onClick={openLetterModal}>Read More</button>
            </div>
        </div>
        <Modal
        isOpen={showLetterModal}
        className="letter-popup"
        onRequestClose={closeLetterModal}
        centered
        >
            <LetterModal closeModal={closeLetterModal}/>
        </Modal>
    </div>
    )
}

const AdvisingTeamGrid = () => <div className='o-week-grid-container'>
    <h2 className='oweek-h2'>MEET YOUR ADVISORS</h2>
    <div className='o-week-group-grid'>
        {OWeekGroups.map((item, key) => {
            return (
                <GroupCard
                    img={item.img}
                    name={item.name}
                    members={item.members}
                    profiles={item.profiles}
                    key={key} />
            );
        })}
    </div>
</div>;

const AffiliateGrid = () => {
    const AffiliateMap = (affiliateList) => {
        return affiliateList.map((item, key) => {
            const bgImg = {
                backgroundImage: `url(${item.img})`,
                backgroundPosition:"center",
                backgroundSize: "cover",
            }
            return( 
                <div className='oweek-affiliate-profile' key={key}>
                    <div className='advisor-img' style={bgImg}/>
                    <p className='oweek-affiliate-name'>{item.name}</p>
                    {item.email && <p className='oweek-affiliate-email'>{item.email}</p>}
                    <p className='oweek-affiliate-majors'>{item.major}</p>
                </div>
            )   
        })
    }

    return (
    <>
        <h2 className='oweek-h2'>OWEEK AFFILIATES</h2>
        <div className='oweek-affiliate-container'>
            <h2 className='oweek-h4'>OWEEK PEER ACADEMIC ADVISORS</h2>
            <div className='oweek-paa-grid'>
                {AffiliateMap(PAAs)}
            </div>
            <h2 className='oweek-h4'>GOPHER</h2>
            <div className='oweek-gopher-grid'>
                {AffiliateMap(Gophers)}
            </div>
        </div>
    </>
    )}

const OweekBook = () =>
 <div className='oweek-book-container'>
    <div className='book-title-container'>
        <h2 className='oweek-book-title'>OWEEK BOOK</h2>
        <a
            className='book-download-button'
            target="_blank"
            rel="noreferrer"
            href='https://drive.google.com/file/d/1bM1lSvrYIUiTobyoSGKiuF_PeHCNNoKh/view?usp=drivesdk'>
            <MdDownload className='book-download-icon' />
        </a>
    </div>
    <iframe className='oweek-flipbook' title='Jones O-Week Book' src="https://online.fliphtml5.com/qrykg/omln/" frameborder="0" allowfullscreen="true" allowtransparency="true"></iframe>
</div>;