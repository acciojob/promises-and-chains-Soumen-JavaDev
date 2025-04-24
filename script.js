//your JS code here. If required.

let age=document.querySelector("#age");
let name=document.querySelector("#name");
let btn=document.querySelector("#btn");

btn.addEventListener("click",(e)=>{
	
	if(age.value.trim().length<=0 || name.value.trim().length<=0){
		alert("Please enter valid details.");
		return;
	}
	let username=name.value.trim();
	let userage=parseInt(age.value.trim());

	let promise1=new Promise((resolve,reject)=>{
	if(userage >=18){
	setTimeout(()=>{
		resolve(`Welcome, ${username}. You can vote`);
	},4000);
	}
	else{
		setTimeout(()=>{
		reject(`Oh sorry ${username}. You aren't old enough.`);
	},4000);
	}
	
});
	promise1
		.then((msg)=>alert(msg))
		.catch((err) => alert(err));
});

