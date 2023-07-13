function Src(){
    return(<div className="flex flex-col md:flex-row justify-between space-y-4">
        <div className="border-b flex justify-between ">
            <input type="text" placeholder="Search" className="font-thin md:w-80 ml-6 focus:outline-none" />
            <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 text-gray-300 duration-200 hover:scale-110"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="10" cy="10" r="7" />
                          <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
            </button>
        </div>
        <button className="border border-black text-lg bg-black text-white rounded-md py-3 px-14 hover:bg-white hover:text-black duration-150">Upload</button>
    </div>)
}

export default Src