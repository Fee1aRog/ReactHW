export default function Button({text, image}) {
    return(
        <button className='btn'>{text}<img className="img" src={image}/></button>
    )
}