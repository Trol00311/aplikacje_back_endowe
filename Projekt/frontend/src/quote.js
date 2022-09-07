import React, { useState, useEffect } from "react";
import axios from "axios";
import "./quote.css";


const x = Math.floor(Math.random()*50+1)

const Quote = () => {
    const [qou, setQou] = useState([]);
    const getQuote = async () => {
        const res = await axios.get(`http://localhost:5000/cytat/${x}`);
        if (res.status === 200) {
            setQou(res.data);
        }
    };
    useEffect(() => {
        getQuote();
    });


    return( 
    <div>
        <p className="cytat">Losowy cytat:</p>
        {qou && qou.map((x) => {
            return (
                <div class='cytatLosowy'>
                     <p className="cytat">{x.tekst}  </p>
                </div>
                    );})}
    </div>
    );
};

export default Quote;