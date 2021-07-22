import './Header.css';
import icon from'../assets/icon/sidicon.png'
import './TopNav.css';

const Header =() =>
{
    return(
       <div className="container-header-top">
           <div className="icon-container">
           <img className="top-icon" src={icon}></img>
           <p className="siddhant">Siddhant Solanki</p>
            </div>
           <div className="container-header">
               <h1 className="header-container-one">Hello World  
               <li className="li-first">!</li>
               <li className="li-second">!</li>
               <li className="li-third">!</li>
               </h1>
               </div>
               <br/>
               <div className="container-header-two">
               <h2>This is Siddhant Solanki</h2>
               <ul>
                   <li>Software Developer</li>
                   <li>Software tester</li>
                   <li>Tech Enthusiast</li>
                   <li>front-End Developer</li>
                   <li>Aspiring Trader</li>
                   <li>Looking for a JOB-Switch</li>
                </ul>

              <h2>I welcome You to my</h2> 
              <h2>Cirriculum Vitae</h2>
           
           </div>
       </div>
    )
}

export default Header;