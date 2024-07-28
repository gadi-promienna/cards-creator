import { List } from "./list";

export interface Baby {
    id: number;
    name: string;
    password: string;
    login: string;
    words_lists: List;
  }

  export interface BabyContextType {
    babies:Baby[],
    baby:Baby|null,
    getBaby:(login:string,password:string)=>Baby|null,
    fetchBabies:()=>Promise<void>,
    babyCreate:(name:string, login:string, password:string)=>Promise<void>,
    babyUpdateById: (id:number, name:string, password:string, words_lists:List[])=>Promise<void>,
    babyDeleteById:(id:number)=>Promise<void>
  };

 