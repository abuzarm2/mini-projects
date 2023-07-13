import Img from "./Img"
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images', false, /\.(png|jpe?g)$/));

function Gallery(){
    return (<div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((img)=>(
            <Img src={img} />
        ))}
    </div>)
}
export default Gallery