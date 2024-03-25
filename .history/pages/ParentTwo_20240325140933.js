import { useState } from "react"
import ChildTwo from "./ChildTwo";

export default function ParetnTwo() {
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData);
    }

    return (
        <>
            {data}
            <ChildTwo childParent={{childToParent}}/>
        </>
    )
}