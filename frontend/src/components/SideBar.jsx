import metaLogo from "../assets/metalogo.png"

function SideBar() {


    return (
        <div className="relative py-2 h-full w-[20%] bg-custom-white " >
            <div className="flex justify-center items-center bg-white py-5 mr-3 h-full w-[93%] rounded-r-[42px]" style={{ boxShadow: "0 0 20px 2px rgba(117, 134, 148, 0.5)" }}>
                <h1 className="py-1 absolute top-5 text-black text-xl font-bold font-tommy rounded-xl h-10 w-2/3 text-center" >I dont know</h1>
                <div className="flex flex-col w-full px-5 space-y-6">
                    <a className=" h-12 w-11/12 flex justify-center items-center rounded-full bg-white border-2 hover:bg-sky-300 hover:scale-105 transition-all">
                        <h1 className=" font-tommy">BLOG WRITER</h1>
                    </a>
                    <a className=" h-12 w-11/12 flex justify-center items-center rounded-full bg-white border-2 hover:bg-sky-300 hover:scale-105 transition-all">
                        <h1 className=" font-tommy">KEYWORD RESEARCH</h1>
                    </a>
                    <a className=" h-12 w-11/12 flex justify-center items-center rounded-full bg-white border-2 hover:bg-sky-300 hover:scale-105 transition-all">
                        <h1 className=" font-tommy">GENERATE IMAGE</h1>
                    </a>
                </div>
                <footer className="absolute flex items-center left-5 bottom-3 py-1 text-gray-700 text-sm font-semibold font-tommy text-center border-slate-500"><img src={metaLogo} alt="metalogo" className="h-10 w-10 mx-3" />LLAMA 3 HACKATHON</footer>
            </div>
        </div >
    )
}

export default SideBar