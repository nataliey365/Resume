//Profile as parent, call other profile related components within 
import pic from "/src/assets/profile_pic.jpg";
import linkedin from "/src/assets/linkedin.svg";
import github from "/src/assets/github.svg";




function ProfilePic() {
    return(
        <div className="profile-img">
            <img className="pic" src={pic}></img>
        </div>
    )
}

function Profile() {
    return(
        <div className="container-fluid p-5">
            <div className="row profile">
                <div className="col-md-6 px-4">
                    <ProfilePic />
                </div>
                <div className="col-md-6 px-4">
                    <div className="intro-div">
                        <h1>Hi i'm Natalie!</h1>
                        <p>I am a third year Computer Science student studying at The University of Auckland.</p>
                        <div className="media">
                            <a href='https://linkedin.com/in/natalie-yip-96a33a272' target="_blank">
                            <img src={linkedin} className="icons"/>
                            </a>
                            <a href='https://github.com/nataliey365' target="_blank">
                            <img src={github} className="icons"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;