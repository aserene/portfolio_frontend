import Header from "../components/Header"
import Footer from "../components/Footer"
const Contact = () => {
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div className="connect-card">
                <h1 id="lets-connect">Let's Connect!</h1>
                <h2>Reach out to discuss potential collaborations or hiring opporunities at <a href="mailto: aserenehoosang@gmail.com" target="_blank" rel="noreferrer noopener">aserenehoosang@gmail.com</a></h2>
            </div>
            {Footer()}
        </div>
    )
}
export default Contact