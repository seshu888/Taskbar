import React from 'react'
import './details.css'
import {useLocation,useParams,useNavigate} from 'react-router-dom';
const Details=()=>{
   const locate= useLocation()
   const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/')
    }
   const item = locate.state
    return(
        <div className="detailsContainer">
            <div className='detailsWrapper'><table>
            <tr>
              <th>Task Id</th>
              <th>Working Status</th>
              <th>Description</th>
              <th>Task Status</th>
              <th>Date of Completion</th>
            </tr>
            <tr>
              <td>{item.id}</td>
              <td>{item.workingStatus}</td>
              <td>{item.desc}</td>
              <td>{item.taskStatus}</td>
              <td>{item.date}</td>
            </tr>
          </table>
            </div>
            <button onClick={handleNavigate}>Back to Home</button>
        </div>
    )
}
export default Details