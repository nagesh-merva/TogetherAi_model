
import React from 'react'

const TypingEffect = ({ text, speed = 20 }) => {
    const [displayText, setDisplayText] = React.useState('')

    React.useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            setDisplayText(text.slice(0, index + 1))
            index += 1
            if (index >= text.length) clearInterval(timer)
        }, speed)

        return () => clearInterval(timer)
    }, [text, speed])

    return (
        <div className='h-full w-full overflow-y-auto'>
            <p className="typing-effect ">
                {displayText}
            </p>
        </div>
    )
}

export default TypingEffect
