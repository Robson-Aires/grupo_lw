import '../styles/TeacherList.css';
import Image from '../image/user.png';

const Teachers = [
    {
        image: Image,
        name: 'Prof, Jhone Doe',
        duration: '20 hours lesson',
        cost: '$100',
    },
    {
        image: Image,
        name: 'Prof, Jhone Doe',
        duration: '20 hours lesson',
        cost: '$100',
    },
    {
        image: Image,
        name: 'Prof, Jhone Doe',
        duration: '20 hours lesson',
        cost: '$100',
    }
]

const TeacherList = () => {
  return (
    <div className="teacher--list">
        <div className="list--header">
            <h2>Teachers</h2>
            <select name="" id="">
                <option value="english">english</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>
        <div className="list--container">
            {
                Teachers.map((item, index) => (
                    <div className="list" key={index}>
                        <div className="teacher--detail">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        </div>
                        <span>{item.name}</span>
                        <span>{item.duration}</span>
                        <span>{item.cost}</span>
                        <span className='teacher--todo'>:</span>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default TeacherList