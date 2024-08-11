import cart from './cart';

export class List{
    category: string;
    marker: number;
    words: string[];
    createWordsList(text:string){
      this.words=text.split(',')
    }

    wordsListToText(){
      return this.words.join(',')
    }
  
    wordsListFromMarker(){
      return this.words.slice(this.marker)
    }

    markerBackward(){

    }

    markerForward(){
      
    }

    markerSet(){

    }

    addImage(){

    }

    createCarts(useMarker?:boolean){

    }
  }


  export type ListContextType = {
    lists: List[];
    addList: (list: List) => void;
    updateList: (list: List) => void;
    deleteList: (category:string) => void;
    getListByCategory: (category:string) => void;
  };
