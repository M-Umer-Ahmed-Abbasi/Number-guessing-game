import inquirer from "inquirer";

async function Number_Take():Promise<number>{
    const {guess} = await inquirer.prompt([{message:"Guess The Number Between 1-10:",type:"number",name:"guess"}]);
    return guess;
}

let Random_number;

while(1){
    Random_number = Math.floor(Math.random() *10) + 1;
    
  if(Random_number === await Number_Take()){
      
          console.log("You Guess right number");
          break;
    }else {
         console.log("You Guess wrong number please Try Again");
    }


}