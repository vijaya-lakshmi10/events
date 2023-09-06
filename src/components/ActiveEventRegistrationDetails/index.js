// Write your code here
import './index.css'
const registrationStatus={
    yetToRegister:'YET_TO_REGISTER',
    registered:'REGISTERED',
    registrationsClosed:'REGISTRATIONS_CLOSED'
}
const ActiveEventRegistrationDetails=props=>{
    const {activeEventRegistrationStatus}=props
    const noActiveEventView=()=>(
        <p className="no-active-event-desc">Click on an event, to view its registration details</p>
    )
    const registrationsClosedView=()=>(
        <div className="view-container">
        <img src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png" alt="registrations closed" className="image"/>
        <h1 className="view-heading1">Registrations Are Closed Now!</h1>
        <p className="desc">Stay tuned. We will reopen the registrations soon!</p>
        </div>
    )
    const registeredView=()=>(
        <div className="view-container">
        <img src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png" alt="registered" className="img"/>
        <h1 className="view-heading2">You have already registered for the event</h1>
        </div>
    )
    const yetToRegisterView=()=>(
        <div className="view-container">
        <img src="https://assets.ccbp.in/frontend/react-js/events-register-img.png" alt="yet to register" className="yet-to-register-image"/>
        <p className="content">A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form.</p>
        <button className="register-here-btn" type="button">Register Here</button>
        </div>
    )
    const displayActiveEventRegistrationDetails=()=>{
        switch(activeEventRegistrationStatus){
            case registrationStatus.registered:
                return registeredView()
            case registrationStatus.yetToRegister:
                return yetToRegisterView()
            case registrationStatus.registrationsClosed:
                return registrationsClosedView()
            default:
                return noActiveEventView()
        }
    }
    return(
        <div className="active-registration-container">
        {displayActiveEventRegistrationDetails()}
        </div>

    )
}
export default ActiveEventRegistrationDetails
