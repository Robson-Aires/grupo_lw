import { BiBookAlt, BiHome, BiMessage, BiSolidReport, BiStats, BiTask } from 'react-icons/bi';

import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='menu'>
        <div className="logo">
            <BiBookAlt className='logo-icon' />
            <h2>EduFlex</h2>
        </div>

        <div className="menu--list">
            <a href="" className="item">
                <BiHome className='logo'/>
                Dashboard
            </a>
            <a href="" className="item">
                <BiMessage className='logo' />
                message
            </a>
            <a href="" className="item">
                <BiSolidReport className='logo' />
                Dashboard
            </a>
            <a href="" className="item">
                <BiStats className='logo' />
                Dashboard
            </a>
            <a href="" className="item">
                <BiTask className='logo' />
                Report
            </a>
            <a href="" className="item">
                <BiHome className='logo' />
                stats
            </a>
        </div>
    </div>
  )
}

export default Sidebar