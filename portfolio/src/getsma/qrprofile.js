import React,{useState,useEffect} from "react";
import QRCode from "react-qr-code";
import firebase from '../auth/firestore.js'
import {
  useParams
} from "react-router-dom";
//muiPsroeAiQ9Qt4HdTwkb7EXI0Z2/d4f58d90-db49-11eb-9026-61856b79f5e8/4d331440-d9a0-11eb-ab56-37841d3ff985/nzkz/aravind kumar
function Qrprofile() {
    let { id,fid,pid,tit,una } = useParams();
    var qrdata = `${id}/${fid}/${pid}/${tit}/${una}`;
    const [listdata, Setlistdata] = useState([]);
    var social_data = [];
    var title = "";
    
    useEffect(() => {
        const Fetchdata = async () => {
            const db = firebase.firestore().collection("Posts");
            const data = await db.where("Id", "==", pid).get();
            Setlistdata(data.docs.map(doc => doc.data()))
        }
        Fetchdata();

    }, [])

    for (const key in listdata[0]) {
        if (key != "Uuid" && key != "Id" && key != "lastCreated_month" && key != "Title" && key != "Profile" && key != "dateCreated_day" && key != "lastCreated_day" && key != "User" && key != "lastCreated_year" && key != "dateCreated_year" && key != "dateCreated_month") {
            social_data.push(key);
        }
        title = listdata[0]['Title']
    }
    

    return (
        <div>
            <QRCode value={qrdata} />
            <p>{ title }</p>
            <ul>
                {listdata.map(data => (
                    social_data.map(data1 => (
                        <li>{data[data1]}</li>
                    ))
                ))}
            </ul>
        </div>
    )
}

export default Qrprofile;