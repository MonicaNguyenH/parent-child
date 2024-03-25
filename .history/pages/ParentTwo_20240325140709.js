import { useState } from "react"

export default function ParetnTwo() {
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData);
    }

    return (
        <>
            {data}
        </>
    )
}