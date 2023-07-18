export interface btnModel {
    name:string;
    click: () => void;
    disabled?:boolean; 
}

export interface betModel {
    name:string;
    amount:number;
    stroke?:string;
}

export interface resultModel {
    name:any;
    value:number;
}

export interface gameModel {
    balance:number;
    bet:number;
    win:number;
    currWin:number;
    active:string[];
}

export interface allGameModel {
    active:string[];
    result:string;
    computer?:string;
    click: (arg:string) => void;
}

export interface boardModel {
    result:string,
    computer:string,
    choices:string[], 
    win:number
}

export interface singleOptModel extends allGameModel {
    data:betModel;
    active:string[];
    result:string;
    computer?:string;
    click: () => void;
}

export interface IObjectKeys {
    [key: string]: string ;
}

export interface rulesModel extends IObjectKeys {
    rock:string;
    paper:string;
    scissors:string;
}