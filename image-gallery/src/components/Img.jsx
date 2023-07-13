import bookmark from "../images/bookmark.svg"

function Img(props){
    return (<div className="relative group">
        <img src={props.src} alt="" className="w-72"/>
        <div className="absolute bottom-0 left-0 right-0 px-4 p-2 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
            <div className="flex justify-between">
            <div className="text-white">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
            </div>
            <div className="flex justify-center">
            <img src={bookmark} alt="bookmark" />
            </div>
            </div>
        </div>
    </div>)
}
export default Img