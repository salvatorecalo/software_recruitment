import { create } from "zustand";
import type { CardInterface } from "../../pages/PlayTime/components/Card/interface/CardInterface";

interface deckStoreProps {
    deck: CardInterface[],
    extractCard: () => CardInterface | null;
    generateDeck: () => void,
    resetDeck: () => void
}

export const deckStore = create<deckStoreProps>(
    (set, get) => ({
        deck: [],
        generateDeck: () => {
            const types: string[] = ["hearts", "spades", "diamonds", "clubs"];
            const newDeck: CardInterface[] = [];

            types.forEach((type) => {
                for (let i = 1; i <= 13; i++) {
                    newDeck.push({
                        type,
                        number: i,
                        value: (i > 10 && ["diamonds", "clubs"].includes(type)) ? 0 : 10,
                        shown: false,
                    });
                }
            });

            // Shuffle deck (Fisher–Yates)
            for (let i = newDeck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
            }

            set({ deck: newDeck });
        },
        resetDeck: () => set({deck: []}),
        extractCard: () => {
            const { deck } = get();
            if (deck.length === 0) return null; 
            const [card, ...rest] = deck; 
            set({ deck: rest }); 
            return card; 
        }
    })
);