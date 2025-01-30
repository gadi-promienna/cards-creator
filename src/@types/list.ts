import { Card } from "./card";

export class List{
    name: string;
    words: string[];
    marker: number;

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

    createCards(){
      // const cards = this.words.map(
      //   (word)=>{
      //     return findCard
      //   })
      }

}  

  export type ListContextType = {
    lists: List[];
    list: List;
    fetchLists: ()=>Promise<void>,
    listCreate: (name:string,words:string[]) => void;
    listUpdate: (id:number,name:string,words:string[]) => void;
    listDelete: (id:number) => void;
    getListByID: (id:number) => void;
  };
