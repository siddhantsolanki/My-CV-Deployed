import './Intro.css';

const Intro=()=>{

    return(
        <div className="intro-container">
            <div className="intro-left-container">
               <div className="intro-left-heading">My Intro</div>
                <ul>
                    <li>
                    <h1 className="intro-name">Siddhant Solanki</h1>
                   <p>I am Tech enthusiat born in the city of taj. I have started my coding journey with the basics of c but really started understanding the code when I started with Java. 
                   I have been equally intrested in computer hardware and love to read about the technological advances made in the softwaere and hardware of this industry ranging from 
                   the UI advancements to the shrinking of processors. I was introduced to web designign when I did an internship in UI/UX designing and have been trying different frameworks
                   of web designing ever since. This site is a live example of what I can do.</p>
                  
                    </li>
                    <li>
                        <h2>Hobbies</h2>
                        <ul className="Hobbies-List">
                            <li>BasketBall</li>
                            <li>FootBall</li>
                            <li>Guitar</li>
                            <li>Drums</li>
                            <li>Writing</li>
                            <li>Processors, Graphic Cards and Computer Hardware</li>
                            <li>Micro-Controllers and Micro-Processors</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Skills</h2>
                        <ul className="Skills-List">
                            <li>Programming Language: C, C++, JAVA, Python, HTML, CSS, Javascript, Embedded C</li>
                            <li>Softwares: Photoshop, Adobe XD, Lunacy</li>
                            <li>SAAS: Figma, Load Runner Cloud, Jenkins</li>
                            <li>FrameWork: Selenium,TestNG,Maven,Cucumber, ReactJS(Learning) </li>
                            <li>In Progress: MERN Stack Development</li>
                        </ul>
                    </li>
                    </ul>   
                            <p>Apart from this I have a little experience of working on DialogFlow, AngularJs, Mapbox GL JS, Flutter and Android Studio</p>
                     
                    <p><b>P.S.-</b> In this site I have tried to implement as much as I can. I have knowledge of other thinsgs too and I am a keen learner, so always ready to learn new things.</p>

               
            </div>
            <div className="intro-right-container">
            <div className="intro-right-heading">Past to Present</div>

                <ul>
                    <li>
                        <h2>St. Conrads Inter College</h2>
                        <h3>2000-2013</h3>
                        <p>I was introduced to Programming in High School with a little exposure to C and the basics of Core JAVA</p>
                    </li>
                    <li>
                        <h2>St. Conrads Inter College</h2>
                        <h3>2013-2015</h3>
                        <p>In these two year I explored other hobbies of mine like Basketball and Drums. I still did programming on java and tried to learn Python.</p>
                    </li>
                    <li>
                        <h2>Sir M. Visvesvaraya Institute of Technology, Banglore</h2>
                        <h3>2016-2020</h3>
                        <p>I enrolled for B.E in EEE branch. 
                           I developed interest for electronics and started 
                           learning programming of microcontrollers and embedded C. 
                           I did various workshops and gained hands on experience on using different ICs and microcontrollers including Arduino, 8051 and others.
                           In my pre-final year I stated did an internship in UI/UX designing and thus got introduced to web dev.</p>
                    </li>
                    <li>
                        <h2>Accenture</h2>
                        <h3>2020-Present</h3>
                        <p>I have joined accenture as Associate Software Engineer in November of 2020. 
                           I have been doing a course on MERN Stack engineer and have been practicing my skills maily on this site.
                           </p>
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default Intro;