

function SwitchOutput() {

    return (
        <div className="absolute top-8 z-40 left-12 h-fit w-auto rounded-full bg-gradient-to-b from-[rgba(238,174,202,1)] via-gray-300 to-[rgba(148,187,233,1)]">
            <div className="bg-white rounded-full m-[3px] px-5 space-x-5">
                <button className=" py-3 font-semibold font-tommy text-sm">TEXT</button>
                <button className=" py-3 font-semibold font-tommy text-sm">CODE</button>
                <button className=" py-3 font-semibold font-tommy text-sm">FILE</button>
            </div>
        </div>
    )
}

export default SwitchOutput