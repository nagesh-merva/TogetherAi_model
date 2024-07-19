import { useState } from "react"
import SideBar from "./SideBar"
import { FaArrowRight } from 'react-icons/fa'

function Display() {
    const [prompt, setPrompt] = useState("")

    const GivePrompt = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ prompt })
            })

            if (response.ok) {
                const Response = await response.json()
                const outputtext = document.getElementById("output_text")
                outputtext.innerText = Response.message
            } else {
                const errorResponse = await response.json()
                console.error('Failed to get response')
                alert(errorResponse.message)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Failed due to Bad Connection. Try Again')
        }
    }

    return (
        <div className="relative h-screen w-full flex">
            <SideBar />
            <div className="relative flex justify-center items-center h-full w-4/5 bg-custom-white">
                <div className=" mb-32 h-3/5 w-full">
                    <div className="px-10 py-5 h-full w-auto overflow-y-auto" id="output">
                        <p id="output_text" className="text-white font-normal text-lg"></p>
                    </div>
                </div>
                <form
                    onSubmit={GivePrompt}
                    className="absolute bottom-5 flex justify-center items-center space-x-3 bg-custom-black drop-shadow-xl shadow-gray-900 p-4 rounded-lg shadow-lg w-3/5 mx-auto mb-4"
                >
                    <input
                        type="text"
                        id="prompt"
                        name="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter a Prompt"
                        className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                        type="submit"
                        className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        <FaArrowRight />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Display
