import { CardGroup, Deck } from "./components";
import './style/PlayTime.css'

export function PlayTime() {
    return (
        <div className="playTime">
            <CardGroup />
            <Deck />
            <CardGroup />
        </div> 
    );
}