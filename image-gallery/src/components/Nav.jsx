import Navitem from "./Navitem"

function Nav(){
    return(<div className="flex flex-col md:space-x-8 md:space-y-0 md:mb-24 md:justify-end justify-center items-center md:flex-row space-y-3">
        <Navitem link="Vector" />
        <Navitem link="Illustrations" />
        <Navitem link="Images" />
        <Navitem link="Icons" />
    </div>)
}

export default Nav