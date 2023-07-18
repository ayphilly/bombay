import { betModel, rulesModel } from "./models"

export const singleBetAmount = 500
export const betPositionOne = 14;
export const betPositionTwo= 3

export const choices = ['rock', 'paper', 'scissors'];

export const positions:betModel[] = [
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