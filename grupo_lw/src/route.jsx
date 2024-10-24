import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';
import Profile from './components/Profile.jsx';

import './App.css';


const route = () => {
  return (
    <div>
            <div className="dashboard">
              <Sidebar />
              <div className='dashboard--content'>
                <Content />
                <Profile />
              </div>
            </div>
    </div>
  )
}

export default route