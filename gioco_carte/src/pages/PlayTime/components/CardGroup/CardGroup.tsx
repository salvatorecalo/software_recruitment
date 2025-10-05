import { Card } from "../Card/Card";
import './style/cardgroup.css'

export function CardGroup() {
    return (
        <div className="cards-container">
            <Card value={10} shown={true} type="hearts" number={10} />
            <Card value={10} shown={true} type="hearts" number={10} />
            <Card value={10} shown={true} type="hearts" number={10} />
        </div>
    );
}