import React from 'react';
import DeleteIcon from '../../Assets/delete.svg'

import styles from './MeetingsTable.module.css'

const MeetingsTable = ({
  meetingsData,
  deleteMeeting,
  createMeeting,
  meetingName,
  setMeetingName,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  date,
  setDate,
  numberOfPeopleAttending,
  setNumberOfPeopleAttending }) => {
  return (
    <table style={{ textAlign: 'center', width: '100%' }}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Sl. No.</th>
          <th className={styles.tableHeader}>Meeting Name</th>
          <th className={styles.tableHeader}>No. of People Attending</th>
          <th className={styles.tableHeader}>Date</th>
          <th className={styles.tableHeader}>Start Time</th>
          <th className={styles.tableHeader}>End Time</th>
          <th className={styles.tableHeader}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {meetingsData.map((meeting, index) => (
          <tr key={index}>
            <td className={styles.tableCell}>{index+1}</td>
            <td className={styles.tableCell}>{meeting.meetingName}</td>
            <td className={styles.tableCell}>{meeting.numberOfPeopleAttending}</td>
            <td className={styles.tableCell}>{meeting.date}</td>
            <td className={styles.tableCell}>{meeting.startTime}</td>
            <td className={styles.tableCell}>{meeting.endTime}</td>
            <td className={styles.tableCell}>
              <img src={DeleteIcon}
                style={{ cursor: 'pointer' }}
                alt="Delete Meeting"
                onClick={() => deleteMeeting(index, meeting._id)} />
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td>
            <center>
              <div className={styles.materialFormField}>
                <input className={styles.materialFormFieldInput}
                  type="text"
                  name="text"
                  value={meetingName}
                  onChange={e => setMeetingName(e.target.value)}
                  style={{ width: '70%' }}
                  required />
              </div>
            </center>
          </td>
          <td>
            <center>
              <div className={styles.materialFormField}>
                <input className={styles.materialFormFieldInput}
                  type="number"
                  name="text"
                  min="0"
                  value={numberOfPeopleAttending}
                  onChange={e => setNumberOfPeopleAttending(e.target.value)}
                  style={{ width: '70%' }}
                  required />
              </div>
            </center>
          </td>
          <td>
            <center>
              <div className={styles.materialFormField}>
                <input className={styles.materialFormFieldInput}
                  type="date"
                  name="text"
                  style={{ width: '70%' }}
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  required />
              </div>
            </center>
          </td>
          <td>
            <center>
              <div className={styles.materialFormField}>
                <input className={styles.materialFormFieldInput}
                  type="time"
                  name="text"
                  style={{ width: '70%' }}
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                  required />
              </div>
            </center>
          </td>
          <td>
            <center>
              <div className={styles.materialFormField}>
                <input className={styles.materialFormFieldInput}
                  type="time"
                  name="text"
                  value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                  style={{ width: '70%' }}
                  required />
              </div>
            </center>
          </td>
          <td>
            <button style={{ backgroundColor: '#1E5F74', border: 0, padding: '5px', borderRadius: '6px', color: 'white', fontSize: '0.8rem', paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer'}} 
                    onClick={createMeeting}>
                      Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MeetingsTable;