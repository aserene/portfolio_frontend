import Header from "../components/Header"
import Footer from "../components/Footer"
const About = () => {
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div className="about-me">
            <h1>About Me</h1>
            <h2>As a highly motivated, organized, and strategic software engineer, I strive to create human-centered designs to improve user experience with the highest efficiency while leveraging my background as a full-stack developer. My greatest strength lies in using my experience working in teams that implement React frameworks, creating original designs to deliver innovative experiences and large digital transformations for organizations.</h2>

            <h2>I'm skilled in: JavaScript || HTML ||  CSS || Python || React || Vue || Node.js || Express.js || MongoDB || Mongoose || DjangoDB || PostgreSQL || RESTful routes || JSON ||JQuery</h2>

            <h2>In my free time, I enjoy learning Turkish and Japanese, as well as surfing and practicing traditional hula dancing.</h2>
            </div>
            {Footer()}
        </div>
    )
}
export default About