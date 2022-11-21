import { useState } from "react";
import Song from "./Song";
import './Songs.css';
const SongList = () => {
    
        const [visible, setVisible] = useState(false);
        //let buttonText = "Show songs";
        //let ulClass = "songs-hidden";

        //if (visible === true){
        //    buttonText = "Hide songs";
        //    ulClass = "songs-display";
        //}
        //
        const toggleVisibility= () => {
            setVisible(!visible);
        }


    return (
        <div>
            <h1>Your favourite songs are:</h1>
            <button onClick={toggleVisibility} >{visible ? "Hide" : "Show"} songs</button>
            { 
            //<ul className = {ulClass} > 
            }
            <ul style={{display:visible ? "block" : "none"}}>
                <Song title="Last thing on my mind" artist="Steps" />
                <Song title ="If you're over me" artist="Years and Years" />
            </ul>
        </div>
    );
}

export default SongList;