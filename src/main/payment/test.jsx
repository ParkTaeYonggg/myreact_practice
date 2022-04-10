import React, { useState } from "react";
import axios from "axios";

export default function Test () {
    const [values, setValues] = useState([]);

    const handlerSubmit = (e) => { 
        e.preventDefault(); 
        // const frmData = new FormData();
        let dd = {};
        for (const [k,v] of Object.entries(values)) {
            dd = {...dd, [k]:v};
        }
        axios.get(`http://52.79.154.236:8080/api/user/test12?`, {params: dd})
        .then(res => console.log(res.data))
        .catch((a,status,c,d,e) => alert(`a : ${a} \n b : ${status} \n c : ${c} \n d : ${d} \n e : ${e}`))

    }

    const handlerValues = (type, e) => { setValues({...values, [type]:e.target.value}) }
    return (
        <form onSubmit={e => handlerSubmit(e)}>
            <input name="email"
                   type="email"
                   placeholder="email"
                   value={values.email || ""}
                   onChange={e => handlerValues("email", e)}
                   />
            <input name="password"
                   type="password"
                   placeholder="password"
                   value={values.password || ""}
                   onChange={e => handlerValues("password", e)}
                   />
            <input name="password2"
                   type="password2"
                   placeholder="password2"
                   value={values.password2 || ""}
                   onChange={e => handlerValues("password2", e)}
                   />
            <input name="name"
                   type="name"
                   placeholder="name"
                   value={values.name || ""}
                   onChange={e => handlerValues("name", e)}
                   />
            <input name="nickname"
                   type="nickname"
                   placeholder="nickname"
                   value={values.nickname || ""}
                   onChange={e => handlerValues("nickname", e)}
                   />
            <input name="phone"
                   type="phone"
                   placeholder="phone"
                   value={values.phone || ""}
                   onChange={e => handlerValues("phone", e)}
                   />
            <input name="backupEmail"
                   type="backupEmail"
                   placeholder="backupEmail"
                   value={values.backupEmail || ""}
                   onChange={e => handlerValues("backupEmail", e)}
                   />
            <button>회원가입</button>
        </form>
    );
}