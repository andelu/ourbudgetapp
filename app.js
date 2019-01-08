//Start of the file

let arrayTotal=(array)=>{
    let arrayT=0
    for(i=0;i<array.length;i++){
        arrayT=arrayT+ parseInt(array.number)
    }
    return arrayT
}
let moneyLeft=()=>{
    return arrayTotal(incList)-arrayTotal(expList)
    
}


const expList=[] 
const incList=[]

const addtoArray = (number,item,choice) => {
    let record = {number: number,
                item: item}
    if (choice === "income") {
        incList.push(record)
    }
    else  {
        expList.push(record)
    }
}
// this is my line