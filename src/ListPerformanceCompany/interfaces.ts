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
    email: string,
    password: string,
    newPassword: string,
    allCards: Array<itemCardInterfaces>,
}
