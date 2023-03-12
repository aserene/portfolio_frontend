const Project = (props) => {
    const project = props.project
    return (
        <div>
            <h1>{project.title}</h1>
            <img src={project.img} alt={`Screenshot of ${project.title}`}/>
            <h3>{`Created using ${project.tech}`} </h3>
            <h3>{project.website}</h3>
            <h4>{project.desc}</h4>
        </div>
    )
}
export default Project