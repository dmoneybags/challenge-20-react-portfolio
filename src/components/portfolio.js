import { PortfolioProject } from "./portfolioProject"
import fetch from "../assets/fetch.png"
import bathroomFinder from "../assets/Bathroom Finder.png"
import unicodePic from "../assets/unicode.png"
import nnPic from "../assets/2048.jpg"
import ecgPic from "../assets/ecg.png"


export function Portfolio(){
    return (
        <section className="section">
            <div class="container">
                <div className="columns is-multiline is-centered">
                    <PortfolioProject image={fetch} name={"Fetch"} linkToDeploy={"https://project-2-fetch.onrender.com"} linkToGithub={"https://github.com/dmoneybags/project-2-fetch"}/>
                    <PortfolioProject image={bathroomFinder} name={"Bathroom Finder"} linkToDeploy={"https://dmoneybags.github.io/project-1-Bathroom-Finder/"} linkToGithub={"https://github.com/dmoneybags/project-1-Bathroom-Finder"}/>
                    <PortfolioProject image={unicodePic} name={"Picture to unicode"} linkToGithub={"https://github.com/dmoneybags/project-1-Bathroom-Finder"}/>
                    <PortfolioProject image={nnPic} name={"2048 Neural network"} linkToGithub={"https://github.com/dmoneybags/ImprovedPersonalWebsite"}/>
                    <PortfolioProject image={ecgPic} name={"ECG Neural Network"} linkToGithub={"https://github.com/dmoneybags/ECGNET"}/>
                </div>
            </div>
        </section>
    )
}