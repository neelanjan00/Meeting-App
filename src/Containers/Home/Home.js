import MeetingList from '../../Components/MeetingList/MeetingList'
import { useSelector } from 'react-redux'
import AboutMe from '../AboutMe/AboutMe'

const Home = () => {

  const activeScreen = useSelector(state => state.activeScreen)

  return (
    <>
      {activeScreen === 'Home' ? <MeetingList /> : <AboutMe /> }
    </>
  );

}

export default Home;