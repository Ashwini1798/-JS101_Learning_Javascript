//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_username="abc@gmail.com";
let database_pass="123@a";

let user_name="abc@gmail.com"; 
let user_pass="123@a";

if (database_username==user_name){

  if (database_pass==user_pass){
    console.log("Login Successfull");
  }else{
    console.log("Incorrect Password");
  }
}else{
  console.log("Wrong credentials")
}
 