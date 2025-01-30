export interface Card
{    
    word: string;
    image_url: string;
}
 
export type CardContextType = {
    cards: Card[];
    card: Card;
    fetchCards: ()=>Promise<void>,
    cardCreate: (word:string) => Promise<any>;
    cardUpdate: (id:number,word:string) => Promise<any>;
    cardDelete: (id:number) => Promise<boolean>;
    findCard: (word:string) => Promise<any>;
  };