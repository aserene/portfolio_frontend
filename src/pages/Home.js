import Header from "../components/Header"
const Home = () => {
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div>
            <h1>Athena HooSang</h1>
            <h3>Full-Stack developer based in California</h3>
            <img src={"/images/headshot.png"}/>
            </div>
        </div>
    )
}
export default Home