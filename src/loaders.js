import url from "./url";
export async function ProjectsLoader(){
    const response = await fetch(url)
    const data = await response.json()
    console.log("Projects loader data: ", data)
    return data
}