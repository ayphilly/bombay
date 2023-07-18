import React from "react";
import { Topbar } from "../containers/topbar";
import { Platformbutton } from "../components/buttons";
import { Allpositions } from "../containers/positions";
import { gameModel } from "../helpers/models";
import { notifErr } from "../helpers/helpers";
import { singleBetAmount, positions, rules, betPositionOne, betPositionTwo } from "../helpers/data";
import { Board } from "../containers/board";
import { Column } from "../components/gamecomp";
import { joinArray } from "../helpers/utils";

export const Home = ()=> {
    const [game,setGame] = React.useState<gameModel>({
        balance:5000,
        bet:0, win:0,currWin:0,
        active:[]
    })

    const [compChoice, setCompChoice] = React.useState<string>('');
    const [result, setResult] = React.useState<string>('');

    let handlePick = (name:string)=> {
        var isActive = game.active.filter(item => item === name)[0]

        // check if user has enough in balance
        if (game.balance < singleBetAmount){
            return  notifErr('You have less than the amount required', 'Place Bet')
        }
        // checks if option hasn't been selected previously 
        if (!isActive){
            // ensure user does not select more than two options
            if (game.active.length < 2) {
                setGame(prevState => ({
                    ...prevState,
                    balance:prevState.balance-singleBetAmount,
                    bet:prevState.bet + singleBetAmount,
                    active: [...prevState.active, name]
                  }))
            } else {
                notifErr('You cannot select more than Two options', 'Place Bet')
            }
        } else {
            // if user selects an already selected position, remove the position 
            var newArr = game.active.filter(item => item !== name)
            setGame(prevState => ({
                ...prevState,
                balance:prevState.balance + singleBetAmount,
                bet:prevState.bet - singleBetAmount,
                active: newArr
              }))
        }
    }


    const determineResult = (playerOptions:string[], computerChoice:string) => {

        const playerChoices = playerOptions.map((playerOption) => playerOption.toLowerCase());

        let playerWins = false;
        let isTie = false;
        
        // loops thru the array of playerchoices
        for (let i = 0; i < playerChoices.length; i++) {
            const currentPlayerChoice = playerChoices[i];

            //  get the winning combination for player choice(s) 
            const winningChoice = rules[currentPlayerChoice];
            
            // compare winning choice to know if its a win or tie for a player
            if (winningChoice === computerChoice) {
                playerWins = true;
                break;
            } else if (currentPlayerChoice === computerChoice) {
                isTie = true;
                break;
            }
        }
        // check if it is a tie
        if (isTie) {
            setResult("It's a tie!");

            //  if its a tie return bet to balance
            setGame((prevState) => ({
              ...prevState,currWin:0,
              balance: prevState.balance + game.bet,
            }));
        } 
        //  check if player won
        else if (playerWins) {
            // calculate winnings based on number of positions
            const winnings = playerOptions.length > 1 ? betPositionTwo * game.bet : betPositionOne * game.bet;
            setResult(joinArray(playerOptions) + ` won`);
            
            setGame((prevState) => ({
                ...prevState, balance: prevState.balance + winnings, currWin:winnings, win: prevState.win + winnings,
            }));
        } 
        //  else computer won
        else {
            setResult(computerChoice + ` won`);
            setGame((prevState) => ({
                ...prevState,currWin:0,
              }));
        }
    };

    // controlls what happen when user clicks on Play
    const handlePlay = () => {
        // generates a random choice
        const compRandom = positions[Math.floor(Math.random() * positions.length)]?.name;
       
        // sets the computer choice state
        setCompChoice(compRandom.toLocaleLowerCase());

        // starts the game & delay for the score
        setTimeout(()=> {
            determineResult(game.active, compRandom.toLocaleLowerCase());
        }, 2000)
    
    };

    // clear states when users wants to place another bet
    let handleClear = ()=> {
        setGame({...game,bet:0, currWin:0,active:[]})
        setCompChoice('')
        setResult('')
    }

    return (
        <section className="w-full h-[65em] md:h-[100vh]">
            <Topbar data={[game.balance,game.bet,game.win]} />

            <div className="w-full h-[90%] container mx-auto flex flex-col items-center  justify-end gap-[100px]">
               
                <Board result={result} computer={compChoice} choices={game.active} win={game.currWin}   />
                <span className="w-full flex flex-col items-center gap-[50px]">
                    <Column>
                        {game.active.length < 1 && <p className="my-0 text-[1.2em] text-cream uppercase mb-[20px] ">Pick your positions</p>}
                        <Allpositions result={result.toLocaleLowerCase()} computer={compChoice} active={game.active} click={handlePick} />
                    </Column>
                   
                    {!result ? <Platformbutton name= "Play" click={handlePlay} disabled={compChoice || game.active.length <1 ? true:false} />
                    :<Platformbutton name="Clear" click={handleClear} />}
                </span>
            </div>
        </section>
    )
}