const Project = (props) => {
    const project = props.project
    return (
        <div>
            <h1>{project.title}</h1>
            <img src={project.img} alt={`Screenshot of ${project.title}`}/>
            <div id="desc">
            <h3 id="label">Description</h3>
            <h4 id="description">
            {project.desc}
            </h4>
            <h3>Technologies Used</h3>
            <h4>{project.tech}</h4>
            </div>
            
            <div class="buttons">
            <a href={project.website}target="_blank" rel="noreferrer noopener" id="view">View Website</a>
            <a href={project.github}target="_blank" rel="noreferrer noopener" id="view">View Github</a>
            </div>
            <br/>
        </div>
    )
}
export default Project