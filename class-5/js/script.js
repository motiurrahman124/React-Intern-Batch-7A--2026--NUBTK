console.log("Hellow Javascrpt")

let value1 = 50
value1 = 100

const value2 = 200;
// value2 = 500

// console.log(value1)
// console.log(value2)

const balance = [10, 650, 654, 99, 6546, 51, 88, 100, 5, 0, 55, 1000, 66, 500, -50]

const totalBalanceCount = balance.length

const thirteenthValue = balance[13]

// jodi balance 0 hoi tahole she fokir
// jodi balance 0 theke boro hoi and 500 er kom tahole she gorib
// jodi balance 499 er theke boro hoi tahole she borolox

// totalFokir
// totalGorib
// totalBorolox

let totalFokir = 0;
let totalGorib = 0;
let totalBorolox = 0;

for(let i = 0; i<=totalBalanceCount-1; i++){
    if(balance[i] == 0){
        totalFokir++
    }else if(balance[i] > 0 && balance[i]<500){
        totalGorib++
    }else if(balance[i]>0){
        totalBorolox++
    }
}

function sum(value1=5, value2=10, value3=20){
    const result = value1+ value2+ value3

    return result
}

console.log(sum(10, value2 ,30))

const student = {
    name: "Student A",
    id: 6546,
    department: "CSE",
    address: {
        homeTown: "Khulna",
        postalCode: 9100
    }
}

console.log("Student name: "+student.name)
console.log("Student postal code: "+student.address.postalCode)

const person = [{name: "Name A", blanace: 654}, {name: "Name B", balance:987}]

console.log(person[1])
console.log(person[1].balance)

console.log(totalFokir)
console.log(totalGorib)
console.log(totalBorolox)

// console.log("Total balance count: "+totalBalanceCount)
// console.log(thirteenthValue)