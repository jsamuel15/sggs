export interface itemCardInterfaces {
    id: number,
    title: string,
    price: number,
    valorize: boolean,
    percentage: number,
}

export interface allLisCardInterfaces {
    name: string,
    profession: string,
    allCards: Array<itemCardInterfaces>
}
