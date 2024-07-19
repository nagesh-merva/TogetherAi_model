import { BoxesLoader } from "react-awesome-loaders"

function Loading() {

    return (
        <div className="h-full w-full flex justify-center items-center">
            <BoxesLoader
                boxColor={"#6366F1"}
                style={{ marginBottom: "20px" }}
                desktopSize={"128px"}
                mobileSize={"80px"}
            />
        </div>
    )
}

export default Loading