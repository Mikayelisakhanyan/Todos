// let numbers = prompt()


// let array= numbers.split(" ")
// console.log(array)
// let  arr = array.sort(function(a, b){
// 	return a-b
// })
// console.log (arr)
// function median(){
// if (arr.length % 2 === 0){
// 	let y = (+arr[(arr.length)/2]+ +arr[(arr.length-2)/2])/2
// 	alert (Math.round(y))
// }else if(arr.length===2){
// 	alert (Math.round((+arr[0]+ +arr[1])/2))
// }else{
// 	alert(arr[(arr.length-1)/2])
// }
// }
// median()

// let column1 = prompt()
// let arr1 = column1.split(" ")

// console.log(arr1)

// let sum=0

// let matrix = document.getElementById("matrix")

// for(i=0; i<arr1.length; i++){
// 	let tr = document.createElement("tr")
	
// 	for(j=0; j<arr1.length; j++){
// 		let td= document.createElement("td")
// 		tr.appendChild(td)
// 		let num1 =Math.round(Math.random()*3)
// 		td.innerHTML= num1
// 		sum+=num1 
// 	}
// 	matrix.appendChild(tr)
// }
 
//  console.log(sum)

// let num = +prompt()
// let rezult = num * (num+1)
// console.log(rezult)

// let number = +prompt()
// let arr=[]
// for(i=number; i>0; i--){
// 		arr.push( i * (i+1))
// 		let answer = document.getElementById("answer")
// 		answer.innerHTML = arr
// }
// console.log(arr)

// let num = +prompt()
// let td1 = document.getElementById("td1")

// td1.innerHTML= num
	
// let td2 = document.getElementById("td2")
// let rezult
// function func(){
// 	if(td1>0){
// 		let rezult = td1 * (td1+1)
// 		td2.innerHTML = rezult
// 	}else{
// 		alert("Its wrong")
// 	}
// }
// console.log(rezult)

// let n = +prompt()

// let result=0
// function sum(n){
// 	result+=n
// 	n=n-1
// 	if(n===0){
// 		return result
// 	}
// 	sum(n)
// }
// sum(n)
// console.log(result)

// let text = prompt([])

// let result = [...new Set(text)]
// console.log(result)
// for(i=0; i<arr.length; i++){
// }

// a("dkma;l", 2, 5, "jd", "dhsd")
// function a(...arg){
// 		console.log(...arg)

// }


// a("dkma;l", 2, 5, "jd", "dhsd")
// function a(){

// 	console.log(this)

// }
// a.call(["dkma;l", 2, 5, "jd", "dhsd"])

// let name = prompt()
// let name1 = [...(name)]
// let rev = name1.reverse()
// let rev1 = rev.join("")
// console.log(rev1)


// let name = prompt()
// function reverseString(name){
// 	return name.split("").reverse().join("")
// }
// console.log(reverseString(name))


// let name = prompt()
// function reverseString(name){
// 	if(name=== ""){
// 		return ""
// 	}else{
// 		return reverseString(name.substr(1)) + name.charAt(0)
// 	}
// }
// console.log(reverseString(name))


// let person = [1, 2, 3, 4]
// let user = [1, 2, 3, 6]
// person._proto_=user
// person.push(5)
// console.log(person.length)
// console.log(user.length)

// $(document).ready(function(){

// 	$(".addcart").click(function(){
// 		let eg=$(this).data("index")
// 		let i = $(".add").eq(eg-1).val()
// 		$(".add").eq(eg-1).val(++i)
// 		// console.log(this)
// 		// $("#miqo").toggle(2000)
// 	})
// })
 let p = prompt()
let y=""
  for (i=p.length+1; i>=0; i--){
 	
 	y+= p.charAt(i)

 }
console.log(y)


