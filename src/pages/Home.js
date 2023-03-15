import Header from "../components/Header"
const Home = () => {
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div>
            <h1>Athena HooSang</h1>
            <img className="headshot" src="https://i.imgur.com/BKS1s0C.jpg" alt="Athena HooSang"/>
            <h3>Full-Stack developer based in California</h3>
            </div>
        </div>
    )
}
export default Home