const Header = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1 className="initials">AH</h1>
                <img className="tag"src="https://i.imgur.com/NH14NTY.png" alt="dev tag"></img>
            </div>
            <a href="/"><h2>Home</h2></a>
            <a href="/about"><h2>About</h2></a>
            <a href="/projects"><h2>Projects</h2></a>
            <a href="https://docs.google.com/document/d/12GM3qdE2fYkHnobHP2AQ5b_g71K6X9gAcOY5uY3D0BQ/edit?usp=sharing" target="_blank" rel="noreferrer noopener"><h2>Resume</h2></a>
            <a href="/contact"><h2>Contact</h2></a>
        </div>
    )
}
export default Header