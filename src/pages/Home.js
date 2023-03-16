import Header from "../components/Header"
import Footer from "../components/Footer"
const Home = () => {
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div className="home-cont">
                <img className="headshot" src="https://i.imgur.com/YH3fMFb.png" alt="Athena HooSang"/>
                <div id="intro">
                    <h1 id="name">Athena HooSang</h1>
                    <h1>I'm a Full-Stack developer based in California with a passion for engineering original and efficient digital solutions with delightful user experiences.</h1>
                </div>
            </div>
            {Footer()}
        </div>
    )
}
export default Home