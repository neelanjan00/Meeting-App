import React, {useState, useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'

import styles from './MeetingList.module.css'
import MeetingsTable from '../MeetingsTable/MeetingsTable'

const MeetingList = () => {

  const[search, setSearch] = useState("")
  const[fromDate, setFromDate] = useState("")
  const[toDate, setToDate] = useState("")
  const[filteredResults, setFilteredResults] = useState([])

  const [meetingName, setMeetingName] = useState('')
  const [startTime, setStartTime] = useState('')
  const [numberOfPeopleAttending, setNumberOfPeopleAttending] = useState(1)
  const [endTime, setEndTime] = useState('')
  const [date, setDate] = useState('')
  const [meetingsData, setMeetingsData] = useState([])

  function useForceUpdate(){
    const [, setValue] = useState(0);
    return () => setValue(value => value + 1)
  }

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    axios.get(
      'https://md-meeting-app.herokuapp.com/meetings'
    ).then(
      response => setMeetingsData(response.data)
    )
  }, [])

  const createMeeting = () => {
    axios.post("https://md-meeting-app.herokuapp.com/create-meeting", {
      meetingName: meetingName,
      numberOfPeopleAttending: numberOfPeopleAttending,
      date: date,
      startTime: startTime,
      endTime: endTime,
    }).then(response => {
        setMeetingsData([...meetingsData, response.data])
        setMeetingName("")
        setNumberOfPeopleAttending("")
        setDate("")
        setStartTime("")
        setEndTime("")
      }
    ).catch(
      error => console.error(error)
    )
  }

  const deleteMeeting = (index, id) => {
    axios.delete(
      `https://md-meeting-app.herokuapp.com/delete-meeting/${id}`
    ).then(response => {
      let temporaryArray = meetingsData
      temporaryArray.splice(index, 1)
      setMeetingsData(temporaryArray)
      forceUpdate()
    }).catch(
      error => console.error(error)
    )
  }

  useEffect(() => {
    let temporaryArray = []

    meetingsData.forEach(meeting => {
      if(meeting.meetingName.includes(search))
        temporaryArray.push(meeting)
    })

    setFilteredResults(temporaryArray)
    forceUpdate()
  }, [search])

  useEffect(() => {
    if(fromDate && toDate) {
      let temporaryArray = []

      meetingsData.forEach(meeting => {
        const jsDate = new Date(meeting.date)
        const jsFromDate = new Date(fromDate)
        const jsToDate = new Date(toDate)

        if(jsDate >= jsFromDate && jsDate <= jsToDate)
          temporaryArray.push(meeting)
      })

      setFilteredResults(temporaryArray)
    }
  }, [fromDate, toDate])

  const searchIcon = () => (
    <svg style={{verticalAlign: 'middle', display: 'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  )

  return (    
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className={styles.container}>
        <p style={{ fontSize: '2rem' }}>My Meetings</p>
        <div className={styles.filtersContainer}>
          <div className={styles.materialFormField}>
            <input className={styles.materialFormFieldInput}
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              required />
            <label className={styles.materialFormFieldLabel} htmlFor="field-text">
              {searchIcon()}
              <p style={{verticalAlign: 'middle', display: 'inline-block', marginLeft: '10px'}}>Search</p>
            </label>
          </div>
          <div className={styles.materialFormField}>
            <div style={{display: 'flex'}}>
              <label style={{marginTop: "15px", marginRight: '10px'}}>From:</label>
              <input className={styles.materialFormFieldInput}
                type="date"
                value={fromDate}
                onChange={e => setFromDate(e.target.value)}
                required />
            </div>
          </div>
          <div className={styles.materialFormField}>
            <div style={{display: 'flex'}}>
              <label style={{marginTop: "15px", marginRight: '10px'}}>To:</label>
              <input className={styles.materialFormFieldInput}
                type="date"
                value={toDate}
                onChange={e => setToDate(e.target.value)}
                required />
            </div>
          </div>
        </div>
        <div className={styles.meetingsTableContainer}>
          <MeetingsTable meetingsData={filteredResults.length === 0 && search === "" && fromDate === "" && toDate === "" ? meetingsData : filteredResults} 
                         deleteMeeting={deleteMeeting} 
                         createMeeting={createMeeting}
                         meetingName={meetingName}
                         setMeetingName={setMeetingName}
                         startTime={startTime}
                         setStartTime={setStartTime}
                         endTime={endTime}
                         setEndTime={setEndTime}
                         date={date}
                         setDate={setDate}
                         numberOfPeopleAttending={numberOfPeopleAttending}
                         setNumberOfPeopleAttending={setNumberOfPeopleAttending} />
        </div>
      </div>
    </div>
  );
}

export default MeetingList;