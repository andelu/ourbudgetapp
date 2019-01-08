//Start of the file

let arrayT=0
let totalMoney=0
let arrayTotal=(array)=>{
    //array.value should be changed to number type ahead
    for(i=0;i>array.length;i++){
        arrayT=arrayT+array.value
    }
}
let moneyLeft=()=>{
    totalMoney=arrayTotal(expList)-arrayTotal(expList)
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