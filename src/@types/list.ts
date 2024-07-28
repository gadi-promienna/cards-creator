export interface List{
    category: string;
    marker: number;
    words_lists: string[];
  }


  export type listContextType = {
    Lists: List[];
    saveList: (list: List) => void;
    updateList: (category: string) => void;
  };

 