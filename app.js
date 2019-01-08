//Start of the file
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