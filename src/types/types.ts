export interface IBoost{
    id: number,
    title: string,
    text: string,
    clickValueBoost: number,
    price: number,
    purchased: boolean
}

export interface IEarn{
    id: number,
    title: string,
    award: number,
    goal: number,
}