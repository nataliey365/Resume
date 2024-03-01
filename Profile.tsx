//Profile as parent, call other profile related components within 
import pic from './profile_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'



function ProfilePic() {
    return(
        <div className = "profile-img">
            <img src={pic}></img>
            
        </div>
    )
}
function Profile() {
    return(
    <div className = "profile-back">
        <div className = "container">
            <div className = "row">
                <div className = "col mx-5">
                    <ProfilePic />
                </div>
                <div className = "col">
                    <div className = "intro-div">
                        <h1 className = "intro">Hi i'm Natalie!</h1>
                        <p className = "intro">I am a third year Computer Science student of the University of Auckland.</p>
                        <div className = "media">
                            <a href = 'www.linkedin.com/in/natalie-y-96a33a272' target = "_blank">
                            <FontAwesomeIcon icon = {faLinkedin}/>
                            </a>
                            <a href = 'https://github.com/nataliey365' target = "_blank">
                            <FontAwesomeIcon icon = {faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className = "arrow">
                <a href = "Qualifications/#select">
                    <FontAwesomeIcon icon={faChevronCircleDown} size = "9x" style = {{color: "#ED7A9B",}}/>
                </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Profile;