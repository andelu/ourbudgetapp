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

// Data Storage
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
// Getting from the DOM
const getnumber = () => {
return document.getElementById("value").value }
const gettext = () => {
    return document.getElementById("item").value
}
const getChoice = () => {
    return document.getElementById('choice').value
}
const getexpensetotal = () => {
    return document.getElementById('expensetotal').value
}
const getIncometotal = () => {
    return document.getElementById('incomeTotal').value
}