
export const getColor= (name:string)=> {
    switch (name.toLocaleLowerCase()){
        case 'rock':
            return 'bg-[#211F4F] border-[#2E4D97]'
        case 'paper':
            return 'bg-[#1A381D] border-[#187E3A]'
        case 'scissors':
            return 'bg-[#50091E] border-[#9A0E30]'
            default:
                return ''
    }
}

export const getTColor= (name:string)=> {
    switch (name.toLocaleLowerCase()){
        case 'rock':
            return 'text-[#257FE9]'
        case 'paper':
            return 'text-[#16C359]'
        case 'scissors':
            return 'text-[#E31542]'
            default:
                return ''
    }
}

export const joinArray=(arr:string[]):string  => {
    return arr.map(item=> item).join(", ")
}