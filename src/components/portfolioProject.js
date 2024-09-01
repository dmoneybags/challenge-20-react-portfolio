export function PortfolioProject({image, name, linkToGithub, linkToDeploy}){
    return (
        <div class="box m-3" style={{height: "350px"}}>
            <figure className="image is-4by3">
                <img src={image} style={{ width: '100%' }} alt=""/>
            </figure>
            <p className="has-text-white m-2 is-size-3">{name}</p>
            <div className="columns">
            <div className="column">
                <button className="button is-primary is-fullwidth">
                <span className="icon">
                    <i class="fa-brands fa-github"></i>
                </span>
                <span>Github</span>
                </button>
            </div>
            {linkToDeploy && <div className="column">
                <button className="button is-link is-fullwidth">
                <span className="icon">
                    <i className="fas fa-share"></i>
                </span>
                <span>Visit Website</span>
                </button>
            </div>}
            </div>
        </div>
    )
}