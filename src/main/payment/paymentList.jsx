import React, { useState } from "react";
import styled from "styled-components";

export default function PaymentList () {
    const OPTIONS = [
        { key: "예시1", value: "예시1의 벨류" },
        { key: "예시2", value: "예시2의 벨류"},
        { key: "예시3", value: "예시3의 벨류"}
    ]
    const [values, setValues] = useState([]);
    const handlerValue = (type,e) => { setValues({...values, [type]:e.target.value})}

    const SelectOptions = ({options, defaultValue}) => {
                return (
                    <select name="selBox" onChange={e => handlerValue("selbox", e)} value={values.selbox}>
                        {Object.entries(options).map( k => 
                        <option key={k[1].key} 
                                value={k[1].key}
                                defaultValue={defaultValue === k[1].value}>
                            {k[1].value}
                        </option>
                        )}
                        <input name="email" type="text"/>
                    </select>
                )
    }

    return (
        <>
            <h1>셀렉트 : {values.selbox}</h1>
            <SelectOptions options={OPTIONS} defaultValue="예시2"/>
        </>
            
    );
}

const WrapperDiv = styled.div`
    
`;
