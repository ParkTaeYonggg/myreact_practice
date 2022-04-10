import React, {useState} from "react";
import axios from "axios";

export default function LoginTest () {
    const [data, setData] = useState([]);
    const handleSetData = (type, e) => {
        setData({...data, [type]: e.target.value})
    }
    const sendData = () => {
        // axios.post("http://192.168.0.8:3000/login", {id: data["id"], pw: data["pw"]})
        axios.get("http://192.168.0.8:3000/search/cats")
             .then(res => {console.log(res.data)})
             .catch(e => console.error(e))
    }
    return (
        <React.Fragment>
            <input type="text" onChange={(e) => handleSetData("id", e)} value={data["id"] || ""}/>
            <input type="password" onChange={(e) => handleSetData("pw", e)} value={data["pw"] || ""}/>
            <button onClick={() => sendData() }>로그인</button>
        </React.Fragment>
    )
}