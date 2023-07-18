import { betModel, rulesModel } from "./models"

export const bet = 500
export const winOne = 14;
export const winTwo= 3

export const choices = ['rock', 'paper', 'scissors'];

export const games:betModel[] = [
    {
        name:'Rock',
        amount:500,
        stroke:'!border-[#257FE9]'
    },
    {
        name:'Paper',
        amount:500,
        stroke:'!border-[#16C359]'
    },
    {
        name:'Scissors',
        amount:500,
        stroke:'!border-[#E31542]'
    }
]

export const results:string[] = ['Balance', 'Bet', 'Win']

export const rules:rulesModel = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};