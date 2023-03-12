import Header from "../components/Header"
import { useLoaderData } from "react-router-dom"
import Project from "../components/Project"
const Projects = (props) => {
    const projects = useLoaderData()
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div>
                {projects.map(project => <Project key={project.id} project={project}/>)}
            </div>
        </div>
    )
}
export default Projects