const Info = (props) => {
    return (
        <div>
            <h1 className="header"><span className="name">Name: </span>{props.headerName}</h1>
            <h1 className="header"><span className="name">Release year: </span>{props.year}</h1>
            <h1 className="header"><span className="name">Written by: </span>{props.director}</h1>
            <h1 className="header"><span className="name">Description: </span>{props.description}</h1>
            <h1 className="header"><span className="name">Characters: </span>{props.characters + ','}</h1>
            <button className="button" onClick={()=>props.btn(props.headerName)}>click to see header name in console</button>
        </div>
    )
}

export default Info