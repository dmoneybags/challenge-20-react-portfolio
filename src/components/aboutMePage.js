import me from '../assets/me.jpg'
export function AboutMePage(){
    return (
        <>
        <img src={me} alt="" style={{height: "500px", width: "auto", borderRadius: "50%",display: "block", margin: "auto", marginTop: "30px"}}/>
        <p className='is-size-1 has-text-white m-4'>About me!</p>
        <p className='m-4'>Lorem ipsum odor amet, consectetuer adipiscing elit. Erat finibus sem curabitur; vitae fringilla sodales. Nulla dictumst at montes sociosqu magna quis sollicitudin ut. Tempus duis conubia eget conubia tincidunt et at enim. Sociosqu quam phasellus ornare per nisl. Cursus pretium tempus orci parturient egestas maximus. Class ullamcorper aptent ipsum amet leo. Efficitur sodales natoque lacinia varius; pulvinar phasellus semper.</p>
        </>
    )
}