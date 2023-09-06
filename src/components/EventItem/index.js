// Write your code here
import './index.css'
const EventItem = props => {
    const {eventDetails,activeEvent,isActive}=props
    const {id,imageUrl,name,location}=eventDetails
    const onClickEvent=()=>{
        activeEvent(id)
    }
    const getEventImageClassName = isActive ? 'event-img active': 'event-img'
    return(
        <li className="event-list-items">
        <button className="event-btn" type="button" onClick={onClickEvent}>
        <img src={imageUrl} className={getEventImageClassName} alt="event"/>
        </button>
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
        </li>
    ) 

}
export default EventItem
