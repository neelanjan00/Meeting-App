import React, {useState} from 'react';
import HomeIcon from '../../Assets/home.svg';
import FaceIcon from '../../Assets/face.svg';
import { useDispatch, useSelector } from 'react-redux'
import { changeScreen } from '../../Actions/actions'

import styles from './Sidebar.module.css'

const Sidebar = () => {

  const activeScreen = useSelector(state => state.activeScreen)
  const dispatch = useDispatch()

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const hamburgerIcon = () => (
    <svg style={{cursor: 'pointer', verticalAlign: 'middle', display: 'inline-block'}} xmlns="http://www.w3.org/2000/svg" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  )

  return ( 
    <div className={styles.container} style={{width: sidebarCollapsed ? '4%' : '20%'}}>
      <div style={{padding: '15px'}}>
        {hamburgerIcon()}
        <p className={styles.rollNumber} 
           style={{display: sidebarCollapsed ? 'none' : 'inline-block'}}>
             1828251
        </p>
      </div>
      <div onClick={() => dispatch(changeScreen('Home'))} 
           style={{backgroundColor: activeScreen === 'Home' ? '#133B5C' : 'inherit', padding: '15px', cursor: 'pointer'}}>
        <img style={{cursor: 'pointer', verticalAlign: 'middle', display: 'inline-block', marginLeft: '5px'}} 
             src={HomeIcon} alt="home" />
        <p className={styles.navElementText}
           style={{display: sidebarCollapsed ? 'none' : 'inline-block'}}>
          Home
        </p>
      </div>
      <div onClick={() => dispatch(changeScreen('About Me'))} 
           style={{backgroundColor: activeScreen === 'About Me' ? '#133B5C' : 'inherit', padding: '15px', cursor: 'pointer'}}>
        <img style={{cursor: 'pointer', verticalAlign: 'middle', display: 'inline-block', marginLeft: '5px'}} 
             src={FaceIcon} alt="home" />
        <p className={styles.navElementText}
           style={{display: sidebarCollapsed ? 'none' : 'inline-block'}}>
          About Me
        </p>
      </div>
    </div>
  );
}

export default Sidebar;