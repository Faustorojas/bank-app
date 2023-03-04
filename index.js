//create global variables
const depositInput = document.getElementById("deposit")
const depositButton = document.getElementById("deposit-btn")
const withDrawInput = document.getElementById("withdraw")
const withDrawButton = document.getElementById("withdraw-btn")
const balanceButton = document.getElementById("balance-btn")
const userName = document.getElementById("full-name")
const userAddress = document.getElementById("address")
const userPhoneNumber = document.getElementById("photo-number")
const userBalance = document.getElementById("balance-check")


//create a class call bank and than create a new class wwhere we pass the name, number, photo, balance to the constructor

class bank{
   constructor(name, address, number, balance){
       this.name = name,
       this.address = address,
       this.number = number,
       this.balance = balance
   }

   sumaryBox(){
      userName.innerHTML = `<b>Name:</b> ${this.name}`  
      userAddress.innerHTML = `<b>Adress:</b> ${this.address}`
      userPhoneNumber.innerHTML = `<b>Phone Number:</b> ${this.number}`
      userBalance.innerHTML = `<b>Balance:</b> ${this.balance}`
   }

   deposit(amount){
       this.balance += amount
       userBalance.innerHTML = `Transaction approved <span style= "font-weight: 700"> New Balance:</span> ${this.balance}$`
      
   }

   withDraw(amount){
      if(amount <= this.balance){
         this.balance -= amount
         userBalance.innerHTML = `transaction approved <span style= "font-weight: 700"> New Balance:</span> ${this.balance}$`
      } else{
         userBalance.innerHTML = `transaction denied <span style= "font-weight: 700">Request:</span> ${amount}$ is more the your Balance: ${this.balance} `
      }
      
      
   }
}





balanceButton.onclick = () => lucas.sumaryBox()



depositButton.onclick = () => {
   lucas.deposit(Number(depositInput.value))
   depositInput.value = ""
}



withDrawButton.onclick = () =>{
    lucas.withDraw(Number(withDrawInput.value))
    withDrawInput.value = ""
}



addEventListener("keypress", (event) => {
   if(depositInput.value !== "" && event.key == "Enter"){
         depositButton.click()
         
   } else if(withDrawInput.value !== "" && event.key == "Enter"){
      withDrawButton.onclick()
      }
})



const lucas = new bank("lucas", "3605 steck ave", "312-464-2456", 500)










console.log("pepe");



// const depositInput = document.getElementById('deposit')
// const depositButton = document.getElementById('submit')
// const balanceDiv = document.getElementById('balance-check')
// const fullName = document.getElementById('full-name')
// const address = document.getElementById('address')
// const photoNumber = document.getElementById('photo-number')
// const withDraw = document.getElementById('withdraw')
// const drawButton = document.getElementById('withdraw-btn')
// const summary = document.getElementById('balance')

// class bank{
//    constructor(){
//       this.name = `<span style= "font-weight: 700">Name:</span>  Robert landon`
//       this.address = `<span style= "font-weight: 700">Address:</span> 27 Orchard st River Rouge`
//       this.phoneNumber = `<span style= "font-weight: 700">Phone Number:</span> xxx-xxx-xxxx`
//       this.balance = 500
      
//    }

//    deposit(a){
//       this.balance += Number(a)
//       balanceDiv.innerHTML = `transaction approved <span style= "font-weight: 700"> New Balance:</span> ${this.balance}$`
//       this.totalBalance = `<span style= "font-weight: 700">Balance:</span> ${this.balance}$`
//       depositInput.value = ''
      
//    }

//    withDraw(b){
//       if(this.balance < Number(b)){
//        balanceDiv.innerHTML = `<span style = "color: red">ERROR</span> not Enough funds <span style = "font-weight: 700">Balance:</span> ${this.balance}$`  
//        withDraw.value = ''
//       } else{
//          this.balance -= Number(b)
//          balanceDiv.innerHTML = `transaction approved <span style= "font-weight: 700"> New Balance:</span> ${this.balance}$`
//          this.totalBalance = `<span style= "font-weight: 700">Balance:</span> ${this.balance}$`
//          withDraw.value = ''
         
//       }
//    }
// }

// let bankOne = new bank()

// let depositBank = () =>{  
//       bankOne.deposit(depositInput.value)
// }



// let withDrawBank = () =>{  
//    bankOne.withDraw(withDraw.value)
// }


// let sumaryBox = () =>{
//    fullName.innerHTML = bankOne.name
//    address.innerHTML = bankOne.address
//    photoNumber.innerHTML = bankOne.phoneNumber
//    balanceDiv.innerHTML = bankOne.totalBalance
// }






