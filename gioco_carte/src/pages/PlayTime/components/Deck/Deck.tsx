import { useState } from "react";
import { deckStore } from "../../../../stores/deckStore/deckStore";
import { Card } from "../Card/Card";
import type { CardInterface } from "../Card/interface/CardInterface";
import './style/deck_card.css'
import '../Card/style/card.css'

export function Deck() {
    const {extractCard} = deckStore();
    const [lastExtractedCard, setLastExtractedCard] = useState<CardInterface | null>(null)

    function handleExtract() {
    const card = extractCard();
    if (card) {
      setLastExtractedCard(card);
    }
  }

    return (
        <section className="deck-card">
            <div onClick={handleExtract} className="card">
                <Card value={0} shown={false} number={0} type="" />
            </div>
            {
                lastExtractedCard && (
                    <Card {...lastExtractedCard} shown={true} />
                )
            }
        </section>
    );
}