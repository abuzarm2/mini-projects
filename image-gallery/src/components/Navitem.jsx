function Navitem(props){
    return(<div className="group">
        <a href="www">{props.link}</a>
        <div className="mx-2 mt-2 border-black border-b-2 opacity-0 group-hover:opacity-100 duration-150"></div>
    </div>)
}

export default Navitem