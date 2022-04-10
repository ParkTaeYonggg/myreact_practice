import React, { useEffect, useState } from "react";

export default function ThrowErr () {
    const [err, setErr] = useState(false);
    useEffect(() => {
        if (err) {
            throw new Error("에러~");
        }
    }, [err])

    const handleThrowErr = () => {
        setErr(true);
    }
    return (
        <React.Fragment>
            <button onClick={() => handleThrowErr()}>클릭</button>
        </React.Fragment>
    )
}