import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import { ProjectsLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projects" element={<Projects/>} loader={ProjectsLoader}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Route>
    </>
))

export default router