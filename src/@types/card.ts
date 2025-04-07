export interface Card
{    
    word: string;
    image_url: string;
}
 
export type CardContextType = {
    cards: Card[];
    deck: Card[];
    card: Card;
    fetchCards:(words:string[])=>Promise<void>,
    deckCreate: (words:string[])=>Promise<void>,
    deckFetch: (words:string[])=>void,
    cardCreate: (word:string) => Promise<any>;
    cardUpdate: (id:number,word:string) => Promise<any>;
    cardDelete: (id:number) => Promise<boolean>;
  };