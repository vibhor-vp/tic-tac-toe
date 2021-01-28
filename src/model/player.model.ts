export class PlayerModel{
    name?: string;
    tttSymbolObj: SymbolObj;
    currentTurn:boolean;
}

class SymbolObj{
    value: string;
    color: string;
}