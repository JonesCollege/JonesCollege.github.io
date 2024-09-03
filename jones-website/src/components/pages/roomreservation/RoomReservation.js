import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import './RoomReservation.css'; 
import { BsChevronRight, BsChevronLeft, BsCalendar2Fill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import {PostEvent} from './PostEvent';
import RoomEventView from './RoomEventView';
import ReservationForm from './ReservationForm';
import { FetchRooms } from './FetchRooms';
import Footer from '../../Footer';


function RoomReservation() {
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [commonsEvents, setCommonsEvents] = useState([])
  const [pdrEvents, setPdrEvents] = useState([])
  const [kitchenEvents, setKitchenEvents] = useState([])
  const [movieRoomEvents, setMovieRoomEvents] = useState([])

  const datePicker = useRef()

  useEffect(() => {
    FetchRooms('Commons', setCommonsEvents)
    FetchRooms('PDR', setPdrEvents)
    FetchRooms('Jitchen', setKitchenEvents)
    FetchRooms('Movie Room', setMovieRoomEvents)

    let url = new URL(window.location.href);
    const accessTokenFromFragment = url.hash.includes('access_token') ? url.hash.split('access_token=')[1] : '';
    const accessToken = accessTokenFromFragment.includes('&token_type=') ? accessTokenFromFragment.split('&token_type=')[0] : '';
    const eventInfo = sessionStorage.getItem('eventInfo');
    if (accessToken !== "" && eventInfo) {
      PostEvent(accessToken, eventInfo).then(() => {
          // just automatically reload page to get new list
          setTimeout(function() {
            // Your code to be executed after 1 second
            window.location.href = "/reserve-room"
            window.history.pushState({}, "", "/reserve-room")
        }, 1000);
        
        // if (resp.status == "confirmed") {
        //   console.log(addedEvent)
        //   if (addedEvent[0] == "Commons") {
        //     commonsEvents.push(addedEvent[1])
        //   }
        //   else if (addedEvent[0] == "Jitchen") {
        //     commonsEvents.push(addedEvent[1])
        //   }
        //   else if (addedEvent[0] == "PDR") {
        //     console.log("event pushed")
        //     commonsEvents.push(addedEvent[1])
        //   }
        //   else if (addedEvent[0] == "Movie Room") {
        //     commonsEvents.push(addedEvent[1])
        //   }
        //}
      })
      sessionStorage.clear()
    }
  }, [])
  
  return (
  <div className='room-reservation-container'>
    <h1 className="header-text">RESERVE A ROOM</h1>
    <p className='description-text'>To create a room reservation, fill out the google form on the left and click submit. This will create an event on the Jones calendar. Make sure you are logged into your Rice email. You may have to refresh the page once you click submit to view your newly created event on the calendar.</p>
    <div className='display-container'>
      {/* <div className='purple-border'>
        <div className='date-header'>
            <div className='day-selector-icon'>
                <DatePicker 
                ref={datePicker}
                selected={new Date(selectedDay)} 
                onChange={(date) => setSelectedDay(moment(date))} 
                //onCalendarOpen={()=>setPickerIsOpen(true)}
                customInput={
                  <BsCalendar2Fill />
                  }
                />
            </div>   
            <button 
              className='month-button' 
              onClick={()=>setSelectedDay(moment(selectedDay).subtract(1, 'day'))}
              >
                <BsChevronLeft size={25}/>
              </button>
              <h2 className='day-title'>{moment(selectedDay).format('dddd M/DD')}</h2>
              <button 
                  className='month-button' 
                  style={{paddingLeft: '16px'}}
                  onClick={()=>setSelectedDay(moment(selectedDay).add(1, 'day'))}
              >
                <BsChevronRight size={25}/>
              </button>
        </div>
        <div className='room-container'>
          <RoomEventView title="Commons" eventsList={commonsEvents} selectedDay={selectedDay}/>
          <RoomEventView title="PDR" eventsList={pdrEvents} selectedDay={selectedDay}/>
          <RoomEventView title="Jitchen" eventsList={kitchenEvents} selectedDay={selectedDay}/>
          <RoomEventView title="Movie Room" eventsList={movieRoomEvents} selectedDay={selectedDay}/>
        </div>
      </div> */}
      {/* <div className="reservation-form">
        <ReservationForm/>
      </div> */}
      <div className="embedded-content">
      <div className="iframe-container form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfpRvK5HQXsglj10SMKeNIhW-VjCiOKSvpxA-XobnvgVPCkrw/viewform?embedded=true"
          className="responsive-iframe"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
      <div className="iframe-container calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=jonessecretaries%40gmail.com&ctz=America%2FChicago"
          className="responsive-iframe"
          title="Google Calendar"
        >
          Loading…
        </iframe>
      </div>
    </div>
    </div>
    <Footer />
  </div>
  );
}

export default RoomReservation;

