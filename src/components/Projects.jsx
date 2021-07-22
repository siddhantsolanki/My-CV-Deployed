import './Projects.css';
import doorlock from '../assets/projects/Smart_door_lock.png';
import solarpanel from '../assets/projects/Solar_panel.png';

const headingStyleDoorLock={
    marginTop: "-20px",
};

const headingStyleSolarPanel={
    marginTop: "-20px",
};

const projectHeading={
    fontSize: "60px",
}


const Projects=()=>{

    return(

        <div className="Projects-Container">
            <h1 style={projectHeading}>Hardware Projects</h1>
            <div className="Projects-List">
                <ul className="solar-list">
                    <a herf="">
                        <li><img className="solar" src={solarpanel}></img></li>
                        <li><h2 style={headingStyleSolarPanel}>Sun Follower Solar Panel</h2></li>
                    </a>
                </ul>
                <ul className="doorlock-list">
                    <a herf="">
                        <li><img className="doorlock" src={doorlock}></img></li>
                        <li><h2 style={headingStyleDoorLock}>Dual Authentication Door Lock System</h2></li>
                    </a>
                </ul>
            </div>
            <div className="Project-Display-Container">
                <h1>Please Click on a project to get its details(under construction)</h1>
            </div>
        </div>

    )

}

export default Projects;