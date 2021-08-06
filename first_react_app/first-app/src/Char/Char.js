import './Char.css';

const Char =(props)=>{
    return (
        <div className="box" onClick={props.delete}>
            <p  >{props.character}</p>
        </div>
    )
}


export default Char;