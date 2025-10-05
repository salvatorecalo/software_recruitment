import { Card } from "../Card/Card";
import type { CardInterface } from "../Card/interface/CardInterface";

export function Deck() {
    function generateDeck() {
        const types: string[] = ["hearts", "spades", "diamonds", "clubs"]
        const deck: Array<CardInterface> = [];

        types.forEach(type => {
            for (let i = 0; i <=13; i++){
                deck.push({
                    "type": type,
                    "value": (i > 10 && ["diamonds", "clubs"].includes(type)) ? 0 : 10,
                    "number": i
                });
            }
        })
        return deck;
    }
    function extractCard() {
        
    }
    return (
        <>
            <Card value={0} shown={false} number={0} type="" />
            {extractCard()}
        </>
    );
}