const Project = (props) => {
    const project = props.project
    return (
        <div>
            <h1>{project.title}</h1>
            <img src={project.img} alt={`Screenshot of ${project.title}`}/>
            <h3 id="description">Description: {project.desc}</h3>
            <h3>Technologies Used</h3>
            <h3>{project.tech}</h3>
            <a href={project.website}target="_blank" rel="noreferrer noopener" id="view"><h3>View Website</h3></a>
        </div>
    )
}
export default Project