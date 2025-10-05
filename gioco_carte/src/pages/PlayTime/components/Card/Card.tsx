import { BiDiamond, BiHeart } from "react-icons/bi";
import type { CardInterface } from "./interface/CardInterface";
import { BsFlower1 } from "react-icons/bs";
import { GiSpades } from "react-icons/gi";
import './style/card.css'

export function Card({value, number, type, shown}: CardInterface) {

    function _getIcon() {
        switch (type) {
            case 'hearts':
                return <BiHeart className="card-icon" />
            case 'clubs':
                return <BsFlower1 className="card-icon" />;
            case 'spades':
                return <GiSpades className="card-icon" />;
            case 'diamonds':
                return <BiDiamond className="card-icon" />;
            default:
                break;
        }
    }
    return (
        shown ? 
            <article className="card">
                {_getIcon()}
                <h3>{number}</h3>
                {_getIcon()}
            </article>
        :
            <div style={{backgroundColor: "lightBlue"}} className="card"></div>
    );
}