let todo = [];

let req = prompt("Please , Enter your request");

while(true){
    if(req == "quit"){
        console.log("Qutting App");
        break;
    }
    if(req == 'list'){
        console.log("---------------------------")
        for(let i=0;i<todo.length;i++){
            console.log(i , todo[i]);
        }
        console.log("---------------------------")
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task is added");
        
    }else if(req == "delete"){
        let index = prompt("Please enter the task index")
        todo.splice(index , 1);
        console.log("task deleted");
    }else{
        console.log("Wrong Request")
    }
    req = prompt("Please , Enter your request");
}
