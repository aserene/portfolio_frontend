import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLoaderData } from "react-router-dom"
import Project from "../components/Project"
const Projects = (props) => {
    const projects = useLoaderData()
    return (
        <div>
            <div>
                {Header()}
            </div>
            <div className="project-cont">
                <div className="project-card">
                    {projects.map(project => <Project key={project.id} project={project}/>)}
                </div>
            </div>
            {Footer()}
        </div>
    )
}
export default Projects