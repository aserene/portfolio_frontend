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
                <h1 id="name">Athena HooSang</h1>
                <h3>Full-Stack developer based in California</h3>
            </div>
            {Footer()}
        </div>
    )
}
export default Home