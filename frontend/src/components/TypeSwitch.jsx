import React from "react"

function SwitchOutput({ selectedContent, onSelect }) {

    const getButtonClasses = (type) => {
        return `py-3 font-semibold font-tommy text-sm ${selectedContent === type ? "text-blue-500" : "text-black"
            }`
    }

    return (
        <div className="absolute top-8 z-40 left-12 h-fit w-auto rounded-full bg-gradient-to-b from-[rgba(238,174,202,1)] via-gray-300 to-[rgba(148,187,233,1)]">
            <div className="bg-white rounded-full m-[3px] px-5 space-x-5">
                <button onClick={() => onSelect('text')} className={getButtonClasses('text')}>TEXT</button>
                <button onClick={() => onSelect('code')} className={getButtonClasses('code')}>CODE</button>
                <button onClick={() => onSelect('file')} className={getButtonClasses('file')}>FILE</button>
            </div>
        </div>
    )
}

export default SwitchOutput