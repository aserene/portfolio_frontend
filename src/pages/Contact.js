import Header from "../components/Header"
import Footer from "../components/Footer"
const Contact = () => {
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div>
            <h1>Let's Connect</h1>
            <h3><a href = "mailto: aserenehoosang@gmail.com" target="_blank" rel="noreferrer">aserenehoosang@gmail.com</a></h3>
            <a href="https://www.linkedin.com/in/ahoosang-se/" target="_blank" rel="noreferrer noopener"><img src="../images/linkedin.png" alt="linkedin"></img></a>
            <a href="https://github.com/aserene" target="_blank" rel="noreferrer"><img src="../images/githubicon.png" alt="githublogo"></img></a>
            </div>
            {Footer()}
        </div>
    )
}
export default Contact