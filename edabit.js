// const addUpTo=(num)=>{
//     let newNum=0;
//     for (i=0;i<=num;i++){
//         newNum+=i 
//     }
//     return newNum;
// }
// console.log(addUpTo(6))
//---------------------------------------------------------------------------
// let arr=[3,8,11,8,5,4,7,42,7,85,45,8,4,25,3];
// const addIndex=(arr)=>{
//     let newArr=[];
//     for (i=0;i<arr.length;i++){
//         newArr.push(i+arr[i])
//     }
//     return newArr
// }
// console.log(addIndex(arr))
//---------------------------------------------------------------------------
// const toInt=(str)=>{
//     Number(str)
// }
// console.log(`3`)
// const toStr=(int)=>{
//     return int.toString()
// }
// console.log(toStr(44))
//---------------------------------------------------------------------------
// arr=['Isam','Tanya','Melika','Adam','Papa']
// function wordsToLength(someArr){
//     let length=[];
//     someArr.map((num)=>{
//         length.push(num.length)
//     })
//     return length
// }
// console.log(wordsToLength(arr))
//---------------------------------------------------------------------------
// function intOrString(param) {
// 	return typeof param=='string'?`str`:`int`
// 	// typeof param=='integer'? 
// }
// console.log(intOrString('fadfs'))
//---------------------------------------------------------------------------
// let drinks=["cola", "fanta", "water"];
// function skipTooMuchSugarDrinks(drinks) {
//     let lessSugarDrinks=[];
// 	drinks.map((item)=>{
//         if (item!=='fanta'&& item!=='cola'){lessSugarDrinks.push(item)}
//     }
// 	)
// 	return lessSugarDrinks
// }
// console.log(skipTooMuchSugarDrinks(drinks))
//---------------------------------------------------------------------------
// function addOddToN(n) {
// 	let sum=0;
// 	for (i=0;i<=n;i++){
// 		if (i%2!==0) sum+=i 
// 	}
// 		return sum
// }
//---------------------------------------------------------------------------

// function isTriangle(a, b, c) {
// 	return (a+b>c)&&(a+c>b)&&(b+c>a)? true:false ;
// }
// console.log(isTriangle(4, 5, 6))
// console.log(isTriangle(3, 4, 6))
// console.log(isTriangle(2, 5, 7))
// console.log(isTriangle(2, 5, 9))
// console.log(isTriangle(2, 9, 5))
// console.log(isTriangle(9, 2, 5))
//---------------------------------------------------------------------------
// function pHName(pH) {
	// pH<7?pH=Math.floor(pH):
	// pH=Math.ceil(pH);
// 	console.log(pH)
// 	return pH>=0&&pH<7?`acidic`:
// 	pH>7&&pH<=14?`alkaline`:
// 	pH==7?`neutral`:
// 	`invalid`;
// }
	// switch (pH){
	// 	case (pH>=0&&pH<7):
	// 		console.log(`acidic`) ;
	// 		break;
	// 	case (pH==7):
	// 		console.log(`neutral`);
	// 		break;
	// 	case (pH>7&&pH<=14):
	// 		console.log(`alkaline`);
	// 		break;
		// default :
		// console.log(`invalid`)
// 	}
// }	
// console.log(pHName(7))
	// }
// 	if (pH==7){
// 		return `neutral`
// 	}
// 	else if (pH>=0&&pH<7){
// 		return `acidic`;
// 	}else if (pH>=8&&pH<=14){
// 		return `alkaline`;
// 	}else{
// 		return `invalid`;
// 	}
// }
// console.log(pHName(8))
// (7.0),
// (7)
// (13.52)
// (-4.33
// (8.27)
// (9.72)
// (-4.58
// (14.85
// (17.76
// (3.9),
// (14.21
// (-2.35
// (2.66)
// (16.45
// (3.46)
// (7.26)
//---------------------------------------------------------------------------
// let words="WHAT DO YOU MEAN WE'RE OUT OF MONEY";
// function wumbo(arr) {
	
// 	let sum=0;
// 	for (i=0;i<arr.length;i++){
// 		if (arr[i]==`M`) {
// 			arr.splice(i,1,`W`)
// 		}
// 	}
// 	return para
// } 	
// console.log(wumbo(words))	
//---------------------------------------------------------------------------
// let a,b,c;
// a=88;b=14;c=23
// let highestMinusLowest=(first,second,third)=>{
// 	// return switch (first,second,third){
// 	// 	case first>second &&first>third :
// 	// 		 (first-second)>(first-third)? console.log(first-second):console.log(first-third);
// 	// 	break;
// 	// 	case second>first&&second>third :
// 	// 		 (second-first)>(second-third)? console.log(second-first):console.log(second-third);
// 	// 	break;
// 	// 	case third>first&&third>second:
// 	// 		 (third-first)>(third-second)? console.log(third-first):console.log(third-second);
// 	// 	break;
// 	// 	default:
// 	// 		 `Error`
// 	// }
// 	// ----------------------------------------------------------------------
// 	// (first>second &&first>third)&&((first-second)>(first-third))?
// 	//  console.log(first-second):console.log(first-third):
// 	// (second>first&&second>third)&& ((second-first)>(second-third))?
// 	// 	console.log(second-first):console.log(second-third) ;	
// 	// (third>first&&third>second)&&((third-first)>(third-second))?
// 	// console.log(third-first):console.log(third-second);
// 	return Math.max(first,second,third)-Math.min(first,second,third);
// }
// console.log(highestMinusLowest(234, 345, 457))
//---------------------------------------------------------------------------
// 12, 12)
// 100, 76
// 6, 4), 
// 528, 22
// 10, 12)
// function operation(num1, num2) {
// 	return num1+num2==24?`added`:
// 	num1*num2==24?`multiplied`:
// 	num1/num2==24?`divided`:
// 	num1-num2==24?`substracted`:null	
// 	switch (24) {
// 		case num1 + num2: return "added";
// 		case num1 - num2: return "subtracted";
// 		case num1 * num2: return "multiplied";
// 		case num1 / num2: return "divided";
// 		default: return null;
// 	}
// }
// console.log(operation(12, 12))
// console.log(operation(100, 76))
// console.log(operation(6, 4))
// console.log(operation(528, 22))
// console.log(operation(10, 12))
//---------------------------------------------------------------------------
// (4, 2, 7),
// (3, 12, 0)
// (5, -5, 2)
// (20, 7, 3)
// (0, 0, 0),
// (1, 2, 3),
// function scoreCalculator(easy, med, hard) {
// 	if(easy<0||med<0||hard<0) return `invalid`
// 	let easP,medP,hardP;
// 	easP=easy*5;
// 	medP=med*10;
// 	hardP=hard*20;
// 	return easP+medP+hardP
// }
// console.log(scoreCalculator(4, 2, 7))
//---------------------------------------------------------------------------
// (6),
// (3),
// (7),
// (12)
// (213
// (16)
// function totalCups(n) {
// 	return Math.floor(n/6)+n
// }
// console.log(totalCups(213))
//---------------------------------------------------------------------------
// class Calculator {
// 	constructor(){}
// 	add(par1,par2) {
// 		return par1+par2
// 	}
// 	subtract(par1,par2) {
// 		return par1-par2
// 	}
// 	multiply(par1,par2) {
// 		return par1*par2
// 	}
// 	divide(par1,par2) {
// 		return par1/par2
// 	}
// }
//---------------------------------------------------------------------------
// (6),
// (22)
// (25)
// (18)
// (98)
// (14)
// function halfQuarterEighth(n) {
// 	return arr=[n/2,n/4,n/8]
// }
// console.log(halfQuarterEighth(22))
//---------------------------------------------------------------------------
// ("Bold", "b")
// ("Italics", "i")
// ("Code", "c")
// ("Ruby", "s")
// ("JavaScript", "b")
// ("Python", "i")
// ("C++", "c"), "`C++`")
// ("Strikethrough", "s")
// function mdFormat(word, style) {
// 	switch (style){
// 		case `b`:
// 			return `**${word}**`;
// 			break;
// 		case `i`:
// 			return `_${word}_`;
// 			break;
// 		case 'c':
// 			return '`'+word+'`';
// 			break;
// 		case `s`:
// 			return `~~${word}~~`;
// 			break;
// 		default :
// 		return style	;
// 	}
// }
// console.log(mdFormat("Bold", "b"))
// console.log(mdFormat("Italics", "i"))
// console.log(mdFormat("Code", "c"))
// console.log(mdFormat("Ruby", "s"))
// console.log(mdFormat("JavaScript", "b"))
// console.log(mdFormat("Python", "i"))
// console.log(mdFormat("C++", "c"))
// console.log(mdFormat("Strikethrough", "s"))
//---------------------------------------------------------------------------
// 1*
// let burger=["bread", "ham", "cheese", "ham", "bread"]
// function getFillings(sandwich) {
// 	sandwich.shift();
// 	sandwich.pop();
// 	return sandwich
// }
// 2*
// function getFillings(sandwich){
// 	sandwich.splice(0,1);
// 	sandwich.splice(sandwich.length -1,1)
// 	return sandwich
// }
// console.log(getFillings(burger))
// 3*
// function getFillings(sandwich){
// 	sandwich.forEach(element => {
// 		return element=='bread'? sandwich.splice(sandwich.indexOf(element),1):element
// 	});
// 	return sandwich
// }
// return sandwich.slice(1,-1)
// }
// console.log(getFillings(burger))
//---------------------------------------------------------------------------
// function isInRange(num, range) {
// 	return num>range.min&&num<range.max
// }
// console.log(isInRange(5, { min: 5, max: 5 }))
//---------------------------------------------------------------------------
// function countWords(str) {
	// let sum=0
	// for (i=0;i<str.length;i++){
	// 	str[i]=null?sum+=1:i
	// }
	// return sum+=1
	// let splitted=str.split(' ')	
	// return splitted.join(' ')
	// return splitted.length
// }

// console.log(countWords("Is this easy mode"))
// console.log()
//---------------------------------------------------------------------------
// function findDigitAmount(num) {
// 	let splitted=num.toString()
// 	return splitted.split('').length
// }
// console.log(findDigitAmount(999))
//---------------------------------------------------------------------------
// let promise = new Promise( (resolve,reject) => {
// 	let animal = "cat"
//   setTimeout(() => {
// 		if(animal === "dog") {
// 			resolve("It's a dog!")
// 		} 
// 	  if(animal !== "dog") {
// 			/* need something here, you might also need to pass
// 			something else besides the resolve callback */
// 			reject`It's not a dog!`
// 		}
//   }, 1000)
// })
//---------------------------------------------------------------------------
// function findLargestNum(arr) {
// 	return Math.max(...arr)
// }
// console.log(findLargestNum([4, 5, 1, 3]))
//---------------------------------------------------------------------------
// function countClaps(str) {
// 	// let sum=0;
// 	// for (i=0;i<str.length;i++){
// 	// 	if (str[i]=='C'){sum+=1}
// 	// }
// 	// return sum
// 	return str.split('C').length
// }
// console.log(countClaps("CClClaClClaClClap!Clap!Clap!ClClaClap!ClClClClaClap!CClap!ClaClaCCClap!ClClap!CClap!Clap!Clap!ClaClaClap!ClaClClClaClaClap!ClaClaClap!ClClCClaClaCClClaClap!Clap!Clap!CClClaClaClaClaClCClClaClaCClaClap!ClCClClClap!Clap!Clap!Clap!Clap!CClaClap!Clap!CCClaClCClClaClClClaClaClaClaCClap!Clap!"))
//---------------------------------------------------------------------------
// function additiveInverse(arr) {
// 	return arr.map((element)=>{
// 		return element*(-1)
// 	})
// }
// console.log(additiveInverse([5, -7, 8, 3]))
//---------------------------------------------------------------------------
// function findSmallestNum(arr) {
// 	return Math.min(...arr)
// }
// console.log(findSmallestNum([43,53,4]))
//---------------------------------------------------------------------------
// ("6.1.9")
// ("2.1.0")
// ("5.12.13")
// function retrieveMajor(semver) {
// 	let newSemver=semver.split('.');
// 	return newSemver[0]
// }

// function retrieveMinor(semver) {
// 	let newSemver=semver.split('.');
// 	return newSemver[1]
// }

// function retrievePatch(semver) {
// 	let newSemver=semver.split('.');
// 	return newSemver[2]
// }
// console.log(retrieveMajor("6.1.9"))
// console.log(retrieveMinor("6.1.9"))
// console.log(retrievePatch("6.1.9"))
//---------------------------------------------------------------------------
// function numberSquares(n) {
// 	total=0
// 	for (i=n;i>0; i--){
// 		total+=i**2
// 	}
// 	return total 
// }
// console.log(numberSquares(15))
//---------------------------------------------------------------------------
// function Go(num) {
// 	let dash='-';
// 	for (i=num;i>0;i--){
// 		dash+='-'
// 	}
// 	return dash
// }
// console.log(Go(444))
//---------------------------------------------------------------------------
// function largestSwap(num) {
// 	// let div=num/10;
// 	// let rem=num%10;
// 	// return div>=rem? true:false
// 	return  Number(num.toString().split('').reverse().join(''))
	
// }
// console.log(largestSwap(27))
// console.log(largestSwap(43))
// console.log(largestSwap(14))
// console.log(largestSwap(53))
// console.log(largestSwap(99))
// console.log(largestSwap(85))
//---------------------------------------------------------------------------
// function factorial(num) {
	// nNum=num*(num-1);
	// let numCount;
	// numCount+=nNum
	// if (num==0) {return numCount}else {factorial(num-1)}
// 	facCount=[];
// 	for (i=1;i<=num;i++){
// 		facCount.push(i)
// 	}
// 	return facCount.reduce((accumulator,currentValue)=>{
// 		return accumulator*currentValue
// 	})
// }
// console.log(factorial(5))
//---------------------------------------------------------------------------
// function difference(nums) {

// 	return (Math.max(...nums))-(Math.min(...nums))
// }
// console.log(difference([-9, -8, 6, -9, 15, 6]))
//---------------------------------------------------------------------------
// let prom = new Promise((resolve, reject) => {
// 	let num = Math.random();
// 	console.log(num)
// 	if (num < .5 ){
// 	  resolve('Yay!');
// 	} else {
// 	  reject('Ohhh noooo!');
// 	}
//   });
  
//   const handleSuccess = (resolvedValue) => {
// 	console.log(resolvedValue);
//   };
  
//   const handleFailure = (rejectionReason) => {
// 	console.log(rejectionReason);
//   };
  
//   prom.then(handleSuccess, handleFailure);
//---------------------------------------------------------------------------
// function repeat(item, times) {
// 	let arr=[];
// 	for (i=0;i<times;i++){
// 		arr.push(item)
// 	}
// 	return arr;
// }
// console.log(repeat("edabit", 3))
//---------------------------------------------------------------------------
// let addEnd=(arr,ending)=>{
	
// 	return arr.map(element => element+ending);
// }
// console.log(addEnd(['clever', 'meek', 'hurried', 'nice'],'ly'))
//---------------------------------------------------------------------------
// let arr=(["Ryan", "Kieran", "Jason", "Matt"])
// const firstFou=(array)=>{
// 	return array.filter((element)=> element.length==4)
// }
// console.log(firstFou(arr))
//---------------------------------------------------------------------------

// function removeNull(arr) {
// 	return arr.filter((element)=>element!==null)
// }
// console.log(removeNull(['a', null, 'b', null]))
//---------------------------------------------------------------------------
// (27, 59),
// (135, 11)
// (45, 45),
// (45, 15),
// (31, 100)
// (35, 55),
// const thirdAng=(angle1,angle2)=>{
// 	let angle3=180-(angle1+angle2)
// 	return angle3==90?'right':
// 	angle3>90?'obtuse':'acute'
// }
// console.log(thirdAng(27, 59))
//---------------------------------------------------------------------------
// function nameShuffle(str) {
// 	return str.split(' ').reverse().join(' ')
// }
// console.log(nameShuffle('Isam Hakmi'))
//---------------------------------------------------------------------------
// function minimumRemovals(arr) {
// 	let sum=arr.reduce((accumulator,currentValue)=>{
// 		return accumulator+currentValue
// 	})
// 	if (sum %2===0) {return 0}else{return 1}
// }
// console.log(minimumRemovals([5, 7, 9, 11]))
// const reduction=(arr)=>{
// 	return arr.reduce((accumulator,currentValue)=>{
// 		return accumulator+currentValue
// 	})

// }
// console.log(reduction([5, 7, 9, 11]))
//---------------------------------------------------------------------------
// function numberSyllables(word) {
// 	return word.split('-').length
// }
// console.log(numberSyllables('kfi-kfi-,wp'))
//---------------------------------------------------------------------------
// function isLeap(year) {
// 	return (year%4==0&&year%100!==0)||(year%400==0)	?true:false
// }
// console.log(isLeap(1600))
//---------------------------------------------------------------------------
// function removeVowels(str) {
// 	return str.replace(/[aeiou]/gi, '')
// }
// console.log(removeVowels('Isam Hakmi'))	
//---------------------------------------------------------------------------
// function removeFirstLast(str) {
// 	return str.slice(1,str.length-1)	
// }
// console.log(removeFirstLast(`Isamo`))
//---------------------------------------------------------------------------
// const REGEXP = /\w/g
//---------------------------------------------------------------------------
// function unlucky13(nums) {
// 	return nums.filter(element=>{
// 		return (element%13)!==0
// 	})
// }
// console.log(unlucky13([91, 286, 416, 884, 1229]))
//---------------------------------------------------------------------------
// const str=`Hello Isam Hakmi, how're you doing?`
// const regex=/\W/gi
// let result=str.match(regex)
// console.log(result) 
//---------------------------------------------------------------------------
// function newWord(txt) {
// 	let splitted=txt.split('');
// 	splitted.shift()
// 	return splitted.join('')
// }
// console.log(newWord('Isamo'))
//---------------------------------------------------------------------------
// function transform(arr) {
// 	return arr.map(element =>element%2===0? element-=1:element+=1);
// }
// console.log(transform([1,2,3,4,5,6]))
//---------------------------------------------------------------------------
// const reverse=(bool)=>{
// 	return typeof bool!=="boolean"?`boolean expected`:
// 	 bool?false:true
	 
// }
// console.log(reverse(25))
//---------------------------------------------------------------------------
// const isTruthy=(input)=>{
// 	return input?1:0
// }
// console.log(isTruthy("false"))

// (1)
// (-1)
// ("false")
// ([])
// (true)
// ({})
// (function(){})
// (0)
// ("")
// (null)
// (undefined)
// (false)
// (NaN)
// ('')
//-------------------------------------------------------------
// function smallerNum(n1, n2) {
// 	let arr=[n1,n2];
// 	return Math.min(...arr).toString()

// }
// console.log(smallerNum(15,99))
//-------------------------------------------------------------
// const onlyEven=arr=>{
// 	return arr.filter(element=>{
// 		return element%2==0
// 	})
// }
// console.log(onlyEven([1, 2, 3, 4, 5, 6, 7, 8]))
//-------------------------------------------------------------
// const determinant=matrix=>{
// 	return (matrix[0][0]*matrix[1][1])-(matrix[0][1]*matrix[1][0])
// }
// console.log(determinant([[1, 2],[3, 4]]))
//-------------------------------------------------------------
// const hurdleJump=(arr,jumper)=>{
// 	return Math.max(...arr)<=jumper
// }
// console.log(hurdleJump([5, 5, 3, 4, 5], 9))
//--------------------------------------------------------------
// const addNum=num=>{
// 	let sum=num.toString().split('').map(Number)
// 	do{
// 		sum.reduce((acc,curr)=>{return sum=acc+ +curr},0)
// 	}
// 	while(sum.length>=1)
// 	return sum
	
// }
// console.log(addNum(98837))
//-----------------------------------------------------------------
// const shortestWord=str=>{
// 	let newStr=str.split(' ').map(element=>{
// 		return element.length
// 	})
// 	return Math.min(...newStr)
// }
// console.log(shortestWord(`You are never been asked to do more than a good job`))
//----------------------------------------------------------------------
// const jadenSm=str=>{
// 	return str.replace(/\b\w/g , el=>{return el.toUpperCase()})
// 	// nStr=str.split(' ')
// 	// // let njf=nStr.map(element=>{
// 	// return 	nStr[0].charAt(0).toUpperCase+nStr.slice(1)
// 	// // })
// 	// // return njf
// }
// console.log(jadenSm('You have never been asked to do more than a good job'))
//----------------------------------------------------------------------
// const wordInArray=(word,array)=>{
// 	return array.filter(item=>{
// 		return item.startsWith(word)
// 	})
// }
// console.log(wordInArray('ma', ['marriage', 'married', 'many', 'delight']))
//----------------------------------------------------------------------
// const objKey=(obj,key)=>{
// 	return obj[key]!==undefined?true:false
// }
// console.log(objKey({ pot: 1, tot: 2, not: 3 }, "not"))
//----------------------------------------------------------------------
// const convertDate=(date)=>{
// 	let [m,d,y]=date.split('/')
// 	return date=y+d+m
// }
// console.log(convertDate(("11/12/2019")))
//---------------------------------------------------------------------
// function reverseCapitalize(str) {
// 	return str.toUpperCase().split('').reverse().join('')
// }
// console.log(reverseCapitalize("edabit"))
//-----------------------------------------------------------------------
// function countdown(start) {
// 	let arr=[]
// 	for(i=start;i>=0;i--){
// 		arr.push(i)
// 	}
// 	return arr
// }
// console.log(countdown(99))
//---------------------------------------------------------------------
// const negate=arr=>{
// 	return arr.map(item=>{
// 		return item*-1
// 	})
// }
// console.log(negate([-1, -2, -3, -4]))
//---------------------------------------------------------------------
// function diffMaxMin(arr) {
// 	return Math.max(...arr)-Math.min(...arr)
// }
// console.log(diffMaxMin([10, 4, 1, 2, 8, 91]))
//--------------------------------------------------------------------
// function existsHigher(arr, n) {
// 	return arr.some(item=>{
// 		return item>=n
// 	})
// }
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 5))
//--------------------------------------------------------------------
// function isRepdigit(num) {
// 	let repNum=num.toString().split('')
// 	for(i=0;i<repNum.length;i++){
// 		if (num<10&&num>0 ){return true
// 			}else if 
// 		(repNum[i]===repNum[i+1]&&num>0){
// 			return true;
// 		}else{
// 		return false
// 	}
// 	}
// }
// console.log(isRepdigit(9999))
//----------------------------------------------------------------------
// const omnipresentNum=(arr,num)=>{
// 	let newArr=arr.map(element=>{
// 	return 	element.includes(num)
// 	})
// 	return newArr.includes(false)?false:true
// }
// console.log(omnipresentNum([[5,6], [5], [5], [6, 5]], 5))
//-----------------------------------------------------------------------
// function sliceSum(arr, n) {
// 	if(arr.length<n){n=arr.length}
// 		let sum=0
// 	for(i=0;i<n;i++){
// 		sum+=arr[i]
// 	}
// 	return sum
// }
// console.log(sliceSum([4, 2, 5, 7], 4))'
//-----------------------------------------------------------------------
// const samFrodo=arr=>{
// 	let sam=arr.indexOf('Sam')
// 	let frodo=arr.indexOf('Frodo')
// 	return sam===frodo+1||sam===frodo-1
// }
// console.log(samFrodo(['Orc','Sam', 'Frodo', 'Legolas',  'Bilbo']))
//-----------------------------------------------------------------------
// const oddOrEven=arr=>{
// 	let odd=[];
// 	let even=[];
// 	arr.forEach(element => {
// 		element%2==0?even.push(element):odd.push(element)
// 	});
// 	let all=[even,odd]
// 	return all
// }
// console.log(oddOrEven([5, 8, 9, 2, 0]))
//-----------------------------------------------------------------------
// const arithmicSeq=arr=>{
// 	let next=(arr[arr.length-1]-arr[arr.length-2])+arr[arr.length-1]
// 	return next
// }
// console.log(arithmicSeq([3, 5, 7, 9]))
//-----------------------------------------------------------------------
// function minMax(arr) {
// 	return newArr=[Math.min(...arr),Math.max(...arr)]
// }
// console.log(minMax([14, 35, 6, 1, 34, 54]))
//----------------------------------------------------------------------
// const meanValue=arr=>{
// 	let sum=0
// 	for (i=0;i<arr.length;i++){
// 		sum+=arr[i]
// 	}
// 	return Number((sum/arr.length).toFixed(2))
// }
// console.log(meanValue([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]))
//----------------------------------------------------------------------
// const identicalArr=(arr1,arr2)=>{
// 	for(i=0;i<arr1.length;i++){
// 		if(arr1[i]!==arr2[i]){return false}
// 	}
// 	return true
// }
// console.log(identicalArr([1, 2], [1, 2]))
//---------------------------------------------------------------------
// const greetPeople=names=>{
// 	let finalGreet=[]
// 	names.forEach(element => {
// 		finalGreet.push('Hello '+element)
// 	});
// 	return finalGreet.join(', ')
// }
// console.log(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]))
//---------------------------------------------------------------------
// function checkEquals(arr1, arr2) {
// 	if (arr1.join("") === arr2.join("")) {
// 	  return true
// 	 } else {
// 	  return false
// 	 }
//   }
//   console.log(checkEquals([11, 2], [1, 12]))
//-----------------------------------------------------------------------
// const piToDecim=n=>{
// 	return Math.PI.toFixed(n)
// }
// console.log(piToDecim(7))
//-----------------------------------------------------------------------
// const uniqArr=arr=>{
// 	let mySet=new Set(arr)
// 	return [...mySet].sort((a,b)=>a-b)
// }
// console.log(uniqArr([5, 7, 8, 9, 10, 15]))
//----------------------------------------------------------------------
// let alp=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const arrToBin=arr=>{
// 	return arr.map(elem=>{
// 		return elem.toString(2)
// 	})
// }
// console.log(arrToBin(alp))
//----------------------------------------------------------------------
// const repeatChar=str=>{
// 	// return str.replace(/\w/gi,/\w{2}/gi)
// 	return str.split('').map(elem=>{return elem+elem}).join('')
// }
// console.log(repeatChar('Hello'))
//---------------------------------------------------------------------
// function capToFront(s) {
// 		let newS=[[],[]]
// 		for (i=0;i<s.length;i++){
// 			s[i]===s[i].toUpperCase()?newS[0].push(s[i]):newS[1].push(s[i])
// 		}
// 		return newS[0].join('')+newS[1].join('')
// }
// console.log(capToFront('heLLOmY'))
//-------------------------------------------------------------------
// const brUserAg=userAg=>{
// 	return /MSIE/g.test(userAg)?'Internet Explorer':
// 	/KHTML/g.test(userAg)?'Google Chrome':'Mozilla Firefox'
// }
// console.log(brUserAg("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"))
//--------------------------------------------------------------------
// function isAvgWhole(arr) {
// 	return arr.reduce((a,b)=>a+b)%arr.length==0
// }
// console.log(isAvgWhole([1, 2, 3, 4, 5,1]))
//---------------------------------------------------------------------
// const phoneNum=arr=>{
// 	firstThree=arr.slice(0,3).join('')
// 	secondThree=arr.slice(3,6).join('')
// 	fourLast=arr.slice(6).join('')
// 	return `(${firstThree}) ${secondThree}-${fourLast}`
// }
// console.log(phoneNum([1, 4, 7, 6, 1, 2, 5, 7, 9, 5]))
//------------------------------------------------------------------
// const howMuchTrue=arr=>{
// 	return arr.filter(item=>item==true).length
	
// }
// console.log(howMuchTrue([true, false, false, true, false]))
//------------------------------------------------------------------
// const splitStr=str=>{
// 	let newArr=[]
// 	let splitted=str.split('')
// 	if (splitted.length%2==0){
// 		for (i=0;i<splitted.length-1;i+=2){
// 		newArr.push(splitted[i]+splitted[i+1])
// 	}}
// 	else {
// 		for (i=0;i<splitted.length-2;i+=2){
// 		newArr.push(splitted[i]+splitted[i+1])
// 	}
// 	newArr.push(`${splitted[splitted.length-1]}_`)
// } 	return newArr
// }
// console.log(splitStr(`abcdefghi`))
//-----------------------------------------------------------------
// function modifiedSum(a, n) {
// 	let sumA=0
// 	for (i=0; i<a.length;i++){
// 		sumA+=Math.pow(a[i],n)
// }
// 	 totalA=a.reduce((a,b)=>{return a+b},0)
// 	return sumA-totalA
//   }
//   console.log(modifiedSum([1, 2, 3], 3))
//--------------------------------------------------------------
// const sumNth=(arr,num)=>{
// 	let sum=0
// 	num>arr.length?0:num
// 	for (i=num-1;i<arr.length;i+=num){
// 		sum+=arr[i]
// 	}
// 	return sum
// }
// console.log(sumNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4))
// //----------------------------------------------------------------
// const stripString=(str,char)=>{
// 	// return str.split('').filter(el=>{
// 	// 	return char.includes(el)?false:true
// 	// })
// 	// .join('')
// 	return str.replace(RegExp(`[${char}]`,`g`),'')
// }
// console.log(stripString("the quick brown fox jumps over the lazy dog", "aeiou"))
//------------------------------------------------------------------
// const sumHalv=n=>{
// 	let sum =n
// 	for(i=2;i<n;i*=2){
// 		sum+=Math.floor(n/i)
// 	}
// 	return sum
// }
// console.log(sumHalv(20))
//--------------------------------------------------------------------
// const reverseBits=n=>{
// 	let bit=n.toString(2).split('').reverse().join('')
// 	return parseInt(bit,2)
// }
// console.log(reverseBits(59))
//--------------------------------------------------------------------
// function getSum( a,b ){
// 	sum=0
// 	// if (a=b)return a
// 	if (a>b){
// 		for (i=a;i>=b;i--){
// 			sum+=i
// 		}
// 	}
// 	else if(a<b){
// 		for (i=b;i>=a;i--){
// 			sum+=i
// 		}
// 	}
// 	else return a
// 	return sum

// }
// console.log(getSum(8,0))
//--------------------------------------------------------------------
// // NOT READY
// const capitalizeAlt=str=>{
// 	return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
	// let result1=[]
	// let result2=[]
	// for (i=0;i<str.length-2;i+=2){
	// 	result1.push(str[i].toUpperCase()+str[i+1])
	// }	
	// str.length%2==0?result1.push(str[str.length-2].toUpperCase()+str[str.length-1]):
	// result1.push(str[str.length-1].toUpperCase())
	// for (i=0;i<str.length-2;i+=2){
	// 	result2.push(str[i]+str[i+1].toUpperCase())
	// }	
	// str.length%2==0?result2.push(str[str.length-2]+str[str.length-1].toUpperCase()):
	// result2.push(str[str.length-1])
	// return [result1.join(''),result2.join('')]
// }
// console.log(capitalizeAlt('dsfsdfgsdgsewefqscda'))
//--------------------------------------------------------------------
// const grabNum=str=>{
// 	return Number(str.match(/\d+/g).reduce((a,b)=>{return Number(a)+Number(b)}))
	
// }
// console.log(grabNum('kfdoj584o3ji4o23m'))
//--------------------------------------------------------------------
// const digitLength=(arr,long)=>{
// 	return arr.filter(el=>el.toString().length==long)
// }
// console.log(digitLength([88, 232, 4, 9721, 555], 3))
//--------------------------------------------------------------------
// const equalNums=(n1,n2)=>{
// 	return n1===n2&& (typeof n1&&typeof n2=='number')
// }
// console.log(equalNums(9,9))
//--------------------------------------------------------------------
// const palindDate=date=>{
// 	[dd,mm,yyyy]=date.split('/')
// 	return dd===mm&&dd+mm===yyyy.split('').reverse().join('')
// }
// console.log(palindDate('02/02/2020'))
// // console.log()
//--------------------------------------------------------------------
// const allAboutStr=str=>{
// 	let s=str.split('')
// 	let result=[]
// 	result.push(s.length,s[0],s[s.length-1],)
// 	result.push(s.length%2==0?s[s.length/2-1]+s[s.length/2]
// 		:s[Math.ceil(s.length/2)])
// 	result.push(s.slice(2).includes(s[1])?('@ index '+s.lastIndexOf(s[1]))
// 		: `not found`)
// 	return result
// }
// console.log(allAboutStr('homeworks'))
//-------------------------------------------------------------------
// function getDrinkByProfession(param){
// 	let lowPara=param.toLowerCase();
// 	switch (lowPara){
// 	case "jabroni":return "Patron Tequila";
// 	break;
// 	 case "school counselor":return "Anything with Alcohol";
// 	break;
// 	 case "programmer":return "Hipster Craft Beer";
// 	break;
// 	 case  "bike gang member"	:return "Moonshine" ;
// 	break;
// 	 case  "politician":return "Your tax dollars" ;
// 	break;
// 	  case  "Rapper"	:return "Cristal" ;
// 	break;
// 	default :return'Beer'
//   	}
// }
// console.log(getDrinkByProfession("jabrOni"))
//----------------------------------------------------------------------
// const spellIt=str=>{
// 	let arr=[];
// 	for (i=0;i<str.length;i++){
// 		arr.push(str.slice(0,i+1))
// 	}
// 	return arr
// }
// console.log(spellIt('Happy'))
//------------------------------------------------------------------------
// function nextId(ids){
// for (i=0;i<ids.length;i++){
// 	if (ids.includes(i))true
// 	else{return i}
// }
// }
// console.log(nextId([4,6,2,4,8,1,0,3,7,5]))
//------------------------------------------------------------------------
// let num=423;
// let sum=0;
// while (num){
// 	sum+=num%10;
// 	num=Math.floor(num/10)
// }
// console.log(sum)
//------------------------------------------------------------------------
// let fruits=['','kiwi','pear','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple','cucumber','pineapple','cucumber','orange','grape','orange','grape','apple','grape','cherry','pear','cherry','pear','kiwi','banana','kiwi','apple','melon','banana','melon','pineapple','melon','pineapple','cucumber','orange','apple','orange','grape','orange','grape','cherry','pear','cherry','pear','apple','pear','kiwi','banana','kiwi','banana','melon','pineapple','melon','apple','cucumber','pineapple','cucumber','orange','cucumber','orange','grape','cherry','apple','cherry','pear','cherry','pear','kiwi','pear','kiwi','banana','apple','banana','melon','pineapple','melon','pineapple','cucumber','pineapple','cucumber','apple','grape','orange','grape','cherry','grape','cherry','pear','cherry','apple','kiwi','banana','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple']
// const subtractSum=num=>{
// 	let numSum=num.toString().split('').reduce((a,b)=>Number(a)+Number(b))
// 	let newN=num-numSum
// 	if (newN<fruits.length){return fruits[newN]}
// 		else{return subtractSum(newN)}
// }
// console.log(subtractSum(110))
//----------------------------------------------------------------------------
// const equation=(a,b,c)=>{return a==b&&a==c};
// console.log(equation(5,3,5))
//----------------------------------------------------------------------------
// function past(h, m, s){
// 	// return [h,m,s].map(el=>{return el*1000})
// 	let second=1000,minute=60000,hour=3600000;
// 	return s*second+m*minute+h*hour
// }
// console.log(past(1,1,0))
//----------------------------------------------------------------------------
// function abbrevName(name){
// 	return name.split(' ').map(el=>el.slice(0,1)).join('.').toUpperCase()
// }
// console.log(abbrevName('Isam Hakmi'))
//-------------------------------------------------------------------------
// function points(games) {
// 	sum=0
// 	games.map(el=>{let splitted=el.split(':')
// let [a,b]=splitted;
// return a>b?sum+=3:a==b?sum+=1:sum})
// return sum
// }
//   console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))
//--------------------------------------------------------------------------

// const customFilterFunction=function(callbackFunction){
// 	let newArr=[];
// 	for(i=0;i<this.length;i++){
// 		if (callbackFunction(this[i])){newArr.push(this[i])}
// 	}
// 	return newArr
// }
// Array.prototype.myFilter=customFilterFunction;
// console.log([1,2,3,4,5].myFilter((element)=>element>3))
//--------------------------------------------------------------------------
// NOT READY
// function xPronounce(sentence) {
// 	return sentence.replace(/x\b/gi,'ecks')
// 	// let arr=sentence.split('')
// 	// let newSentence=''
// 	// for (i=0;i<arr.length;i++){
// 	// 	arr[i]==/\sx\s/g?newSentence+=('ecks'):
// 	// 	arr[i]==/\sx\w/g? newSentence+=('z'):
// 	// 	arr[i]==/x\w/g?newSentence+=('cks'):newSentence+=(arr[i])
// 	// }
// 	// return newSentence
// }
// console.log(xPronounce("Inside the box x was a xylophone"))
//-------------------------------------------------------------------------
// var num=111;
// var a=num.toString(), 
//     b=num.toLocaleString(), 
//     c=num+''
// console.log([a,b,c,num])
//---------------------------------------------------------------------------
// const colorOf=(r,g,b)=>{
// 	// let arr=[r,g,b]
// 	// let result='#'
// 	// for (i=0;i<arr.length;i++){
// 	// 	result+=arr[i].toString(16).padStart(2,'0')
// 	// }
// 	// return result
// 	return `#${[r,g,b].map(el=>el.toString(16).padStart(2,'0')).join('')}`
// }
// console.log(colorOf(255,0,0))
//----------------------------------------------------------------------------
// var flatten = function (array){
// 	// return array.flat()
// 	return array.concat.apply([],array)
//    }
//    console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
//-----------------------------------------------------------
// function isSolved(board) {
// 	return board.flat()===board.flat().sort()
// }
// console.log(isSolved([[0, 1],[2, 3]]))
//---------------------------------------------------------------------------
// function findTheX(str){
// 	let re = /(\bx\b)|(\bx)|(x)/ig;//let	c=/((\Bx\B)|(\Bx\b))|(\bx\b)|(\bx\B)/gi;	
// 	return str.replace(re,( a, b, c) => a ? "ecks" : b ? "z" : "cks")
// }
// console.log(findTheX(`Xray is an incredible texnology x with xylophone in the box`))
//---------------------------------------------------------------------------
// function hashPlusCount(str) {
// 	let a=0,b=0;
// 	for(i=0;i<str.length;i++){
// 		// str[i].match(/#/g)?a+=1:
// 		// str[i].match(/\+/g)?b+=1:i		
// 		str[i]=='#'?a+=1:
// 		str[i]=='+'?b+=1:i
// 	}		
// 	return [a,b]
// }
// console.log(hashPlusCount("#+#+"))
//--------------------------------------------------------------------------------
// function replaceVowel(word) {
// 	return word.replace(/[aeiou]/g,(v)=>'aeiou'.indexOf(v)+1)//.replace(/a/g,1).replace(/e/g,2).replace(/i/g,3).replace(/o/g,4).replace(/u/g,5)
// }
// console.log(replaceVowel('elevator'))
//---------------------------------------------------------------------------------
// const squareOrSquareRoot=arr=>{
// 	let newArr=[]
// 	arr.map(el=>{
// 		Number.isInteger(Math.sqrt(el))?newArr.push(Math.sqrt(el)):
// 		newArr.push(Math.pow(el,2))
// 	})
// 	return newArr
// }
// console.log(squareOrSquareRoot([1,9,5,7,4]))
//--------------------------------------------------------------------------------
// const paintedSquares=n=>{
// 	let a=n-1,b=n+1
// 	return b**3-a**3
// }
// console.log(paintedSquares(2))
//----------------------------------------------------------------------------------
// const removeTrailingZeros=n=>{
// 	return parseFloat(n)
// }
// console.log(removeTrailingZeros("03.1400"))
//--------------------------------------------------------------------------------
// function sc(floor){
// 	let result=''
// 	for (let i=0;i<floor-1;i++){
// 		result+='Aa~ '
// 	}
// 	floor<7&&floor>1?result+='Pa! Aa!':
// 	floor>=7?result+='Pa!':''
// 	return result
//   }
//   console.log(sc(5))
//------------------------------------------------------------------------------
// function findEvenNums(num) {
// 	let arr=[];
// 	for (i=2;i<=num;i+=2){
// 		arr.push(i)
// 	}
// 	return arr
// }
// console.log(findEvenNums(9))
//-------------------------------------------------------------------
// console.log(parseInt('50%'))
//------------------------------------------------------------------------------
// const convertCartesian=(x, y)=>{
// 	let result=[];
// 	for (i=0;i<x.length;i++){
// 		result.push([x[i],y[i]])
// 	}
// 	return result
// }
// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]))
//------------------------------------------------------------------------
// function showdown(p1, p2) {
// 	p1S=0
// 	p2S=0
// 	while (p1S<p1.indexOf('B')){
// 		p1S+=1
// 	}
// 	while (p2S<p2.indexOf('B')){
// 		p2S+=1
// 	}
// 	return p1S>p2S?'p1':
// 	p2S>p1S?'p2':'tie'
// }
// console.log(showdown("               Bang! ","             Bang!   "))
//------------------------------------------------------------
// function reverse(string) {
// 	// Base case
// 	if (string.length < 2) return string;
// 	// Recursive case
// 	return reverse(string.slice(1, string.length)) + string[0];
//   }
//   console.log(reverse('Isamov'))
//----------------------------------------------------------
// const functionRecursive=arr=>{
// 	if (arr.length<2)return arr[0];
// 	console.log(arr[0])
// 	return functionRecursive(arr.slice(1))
// }
// console.log(functionRecursive([4,2,6,'sd']))
//-----------------------------------------------------------
//FUNCTION RECURSIVE
// const palindromeOr=str=>{
// 	if (str.length<2)return true;
// 	if(str[0]===str[str.length-1]){
// 		return palindromeOr(str.slice(1,-1))
// 	}
// 	else{return false}
// }
// console.log(palindromeOr('isamssasi'))
//---------------------------------------------------------
// const  numberRaised=(a,b)=>{
// 	if (b<2)return a;
// 	return a*(numberRaised(a,b-1))
// }
// console.log(numberRaised(4,4))
//---------------------------------------------------------\
// console.log('q'.charCodeAt()-96)
//---------------------------------------------------------
// String.prototype.toAlternatingCase = function () {
// 	let caps=this.toUpperCase()
// 	let result=''
// 	for(i=0;i<this.length;i++){
// 	  caps[i]===this[i]?result+=this[i].toLowerCase():result+=caps[i] 
// 	  }
// 	  return result
// }
// console.log('HelidsngjDUfRS'.toAlternatingCase())
//------------------------------------------------------------
// function arrayMadness(a, b) {
// 	return a.map(el=>Math.pow(el,2)).reduce((a,b)=>a+b,0)>b.map(el=>Math.pow(el,3)).reduce((a,b)=>a+b,0)
// }
// console.log(arrayMadness([5,8,7],[3,1,1]))
//--------------------------------------------------------------
// const maxAndMin=(arr1,arr2)=>{
// 	return Math.min(...arr1)>Math.min(...arr2)&&Math.max(...arr1)>Math.max(...arr2)
// }
// console.log(maxAndMin([0,8,7],[3,1,9]))
//--------------------------------------------------------------
// const sumOfBudget=arr=>{
// 	// return arr.reduce((a,b)=>a.budget+b.budget,0)
// 	let sum=0
// 	for (i=0;i<arr.length;i++){
// 		sum+=arr[i].budget
// 	}
// 	return sum
// }
// console.log(sumOfBudget([
// 	{ name: "John", age: 21, budget: 23000 },
// 	{ name: "Steve",  age: 32, budget: 40000 },
// 	{ name: "Martin",  age: 16, budget: 2700 }
//   ]))
//---------------------------------------------------------
// const meanNumber=num=>{
// 	let numLength=num.toString().split('').length
// 	let arr=[];
// 	for (i=0;i<numLength;i++){
// 		arr.push(num%10)
// 		num=Math.floor(num/10)
// 	}
// 	return Math.floor(arr.reduce((a,b)=>a+b,0)/numLength)
// }
// console.log(meanNumber(985))
//---------------------------------------------------------------
// function inkLevels(inks) {
// 	let arr=[]
// 	for (let x in inks){
// 		arr.push(inks[x])
// 	}
// 	return Math.min(...arr)
// }
// console.log(inkLevels({
// 	"cyan": 23,
// 	"magenta": 12,
// 	"yellow": 10
// }))
//-------------------------------------------------------------------
// function objectToArray(obj) {
// 	let array=[]
// 	for (let x in obj){
// 		array.push([x,obj[x]])
// 	}
// 	return array
// }
// console.log(objectToArray({
// 	D: 1, 
//   B: 2, 
//   C: 3
// }))
//------------------------------------------------------------------
// function afterNYears(names, n) {
// 	Object.values(names).map(x=>x+=n)
// 	for (x in names){
// 		names[x]+=n
// 	}
// 	return names
// }
// console.log(afterNYears({
// 	"Joel" : 32,
// 	"Fred" : 44,
// 	"Reginald" : 65,
// 	"Susan" : 33,
// 	"Julian" : 13
// }, 1))
//----------------------------------------------------------
// let newDate=new Date()
// let gs=newDate.getTime(2011, 3, 25)
// console.log(gs)
//----------------------------------------------------------

// console.log('AABBBCCCC'.replace(/\w{2/gi,x=>2+x)) 
//-----------------------------------------------------------
// const biggestCons=num=>{
// 	const splitted=num.toString().split('')
// 	let arr=[]
// 	for (i=0;i<splitted.length-4;i++){
// 		arr.push(splitted.slice(i,i+5).join(''))
// 	}
// 	return Math.max(...arr)
// }
// console.log(biggestCons(36284904827495))
//---------------------------------------------------------
// NOT READY
// const findWord=s=>{
// 	let wCount=0,oCount=0,rCount=0,dCount=0
// 	for (i=0;i<s.length;i++){
// 		s[i]==='w'?wCount+=1:
// 		s[i]==='o'?oCount+=1:
// 		s[i]==='r'?rCount+=1:
// 		s[i]==='d'?dCount+=1:s[i]
// 	}
// 	return Math.min(...[wCount,oCount,rCount,dCount])
// 	return s.split('w')
// }
// console.log(findWord('When you in order to do something by a wrong way, your heart will missed somewhere.'))
//-------------------------------------------------------------------
// function makeArrayConsecutive2(statues) {
// 	let sorted=statues.sort((a,b)=>a-b)
//     let result=0
//     for (i=0;i<sorted.length;i++){
//         sorted[i+1]-sorted[i]>1?result+=(sorted[i+1]-sorted[i])-1:0
//     }
//     return result
// }
// console.log(makeArrayConsecutive2([6, 2, 3, 8]))
//-------------------------------------------------------------------
// function almostIncreasingSequence(sequence) {
//     for(i=0;i<sequence.length;i++){
// 	  let filtered=sequence.filter(x=>x!==sequence[i])
// 	  let sorted=filtered.sort((a,b)=>a-b)
// 	  for(i=0;i<filtered.length;i++){
// 		(filtered[i]===sorted[i])
// 	  }
// 	}
// }
// let count=0
// for (let i=0;i< sequence.length; ++i) {
//     if (sequence[i] >= sequence[i + 1]) {
//         if (i !== 0 && sequence[i - 1] >= sequence[i + 1]) {
//             sequence.splice(i + 1, 1);
//             --i;
//         }
//         count++;
//     }
// }

// return count < 2
// }
// console.log(almostIncreasingSequence([1, 2,10, 3, 4]))
//--------------------------------------------------------------------
// const divideArr=arr=>{
// 	return arr.match(/\d{1,3}/g)
// }
// console.log(divideArr('49300238252493'))
//-------------------------------------------------------------------
// const polypeptide={AUG:'Methionine',
// UUU :'Phenylalanine',
// UUC	:'Phenylalanine',
// UUA :'Leucine',
// UUG	:'Leucine',
// UCU :'Serine',
// UCC :'Serine',
// UCA :'Serine',
// UCG	:'Serine',
// UAU :'Tyrosine',
// UAC	:'Tyrosine',
// UGU :'Cysteine',
// UGC	:'Cysteine',
// UGG	:'Tryptophan',
// UAA :'STOP',
// UAG :'STOP',
// UGA:	'STOP'}
// const translate = (protein) => {
// 	if (!protein)return [];
// 	const translation=protein.match(/\w{1,3}/ig)
// 	let result=[]
// 	for (let i=0;i<translation.length;i++){
// 	  if (polypeptide[translation[i]]=='STOP'){break}
// 	  else if(polypeptide.hasOwnProperty ([translation[i]]))
// 	  {result.push(polypeptide[translation[i]])}
// 	  else {return `Invalid codon`}
// 	}
// 	return result
//   };
// console.log(translate('UCUUUGFSG'))
//----------------------------------------------------------------------
// function QuestionsMarks(str) { 
// 	counter=0
// 	let sliced=[]
// 	nA=str.match(/\d/g)
// 	for (i=0;i<nA.length-1;i++){
// 	 +nA[i]+ +nA[i+1]===10?
// 	   sliced.push(str.slice(str.indexOf(nA[i]),str.indexOf(nA[i+1])).split('')):i
// 	}
// 	flatS=sliced.flat(2)

// 		   for (let i=0;i<flatS.length;i++){
// 		 if(flatS[i]=='?') counter+=1
// }
// 	return counter===3
// }
//   console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
  //-----------------------
//   console.log('kfsoudjr8934j98e4u99dfss7fd7s7e'.split('').filter(x=>typeof Number(x)==='number'))
//--------------------------------------------------
// function maxTotal(nums) {
// 	return nums.sort((a,b)=>a-b).slice(-5).reduce((a,b)=>a+b)
// }
// console.log(maxTotal)
//--------------------------------------------------------------------
// function formatNum(num) {
// 	if (num>999){
// 		let s=num.toString().split(/(?<=\d)\d{3}/)
// 		return s.join(',')
// 	}else{return num}
// }
// console.log(formatNum(1005478950))
//---------------------------------------------------------------------
// function leftShift(arr, num) {
// 	for (i=0;i<num;i++){
// 		let shifted=arr.shift()
// 		arr.push(shifted)
// 	}
// 	return arr
// }

// function rightShift(arr, num) {
// 	for (i=0;i<num;i++){
// 		let poped=arr.pop()
// 		arr.unshift(poped)
// 	}
// 	return arr
// }
// console.log(leftShift([1, 2, 3, 4], 1))
//--------------------------------------------------------
// const regex=str=>{
// 	return str.replace(//g,x=>x.toUpperCase())
// }
// console.log(regex('i have in a dream'))
//--------------------------------------------------------
// function noYelling(phrase) {
// 	return phrase.replace(/(!|\?)*$/g,'$1')
// }
// console.log(noYelling('That\'s a ton!! of cheese?????'))
//----------------------------------------------------------
// function alliterationCorrect(sentence) {
// 	filtered=sentence.split(' ').filter(x=>x.length>3)
// 	for(i=1;i<filtered.length;i++){
// 		if(filtered[0][0].toLowerCase()!==filtered[i][0]) return false
// 	}
// 	return true
// }
// console.log(alliterationCorrect('Tanya took the tomatoes. Two times two is not twenty.'))
//------------------------------------------------------------
// function convert(deg) {
// 	let letter=deg.slice(-1)
// 	let num=deg.slice(0,-2)
// 	return letter==='C'?`${Math.round(num*1.8)+32}°F`:
// 	'F'?`${Math.round((num-32)/1.8)}°C`:`Error`
// }
// console.log(convert('-35°C'))
//-----------------------------------------------------------
// const spliceCh=arr=>{
// 	arr.splice(-2,2)
// 	return arr
// }
// console.log(spliceCh([5,7,9,4,7,6]))
//------------------------------------------------------------
// SMART REGEX
// const alliterationCorrect = sentence => {
// 	const words = sentence.split(' ').filter(word => word.length > 3);
// 	const initial = words[0][0];
// 	return words.every(word => new RegExp(`^${initial}`, 'i').test(word));
//   };
//------------------------------------------------
// const func=()=>{
// 	num='asd'.split('')
// 	// return num.map(x=>x.charCodeAt())
// 	return num.reduce((a,b)=>{
// 		 (a+b.charCodeAt())
// 	},0)
// }
// console.log(func())
//---------------------------------------------------------
// function sameAscii(a, b) {
// 	return a.split('').reduce((a,b)=>{return a+b.charCodeAt()},0)===
// 		b.split('').reduce((a,b)=>{return a+b.charCodeAt()},0)
// }
//--------------------------------------------
// function replace(str, r) {
// 	let regex=new RegExp(`[${r}]`,'g')
// 	return str.replace(regex,'#')
// }
// console.log(replace("rattle", "r-z"))
//---------------------------------------------------
// function initialize(names) {
// 	return names.map(x=>x.replace(/[a-z]/g,'').replace(/(?<=\w)\b/g,'.'))
// }
// console.log(initialize(['Sherlock Holmes', 'John Watson', 'Irene Adler']))
//----------------------------------------------------------------
// const initialVow=str=>{
// 	return str?str.match(/\b[aeiou]\w*/ig).map(e=>e.toLowerCase()) :[]
// 	return str.replace(/\./g,'').toLowerCase().split(' ').filter(x=>/^[aeiou]\w*$/.test(x))
// }
// console.log(initialVow("A simple life is a happy life for me."))
//--------------------------------------------------------------
// const doubleLetter=word=>{
// 	// for (i=0;i<word.length-1;i++){
// 	// 	if (word[i]==word[i+1]) return true
// 	// }
// 	// return false
// 	// return /([a-z]){2}/gi.test(word)
// ***	return /(\w)\1/.test(word)
// }
// console.log(doubleLetter("droaop"))
//------------------------------------------------------------------
// function getSequence(low, high) {
// 	// newArr=[]
// 	// while(low<=high){
// 	// 	newArr.push(low)
// 	// 	low++
// 	// }
// 	// return newArr

// 	return low==high?[low,high]:[low,getSequence(low+=1,high)]
// }
// console.log(getSequence(500,510))
//--------------------------------------------------------------
// function countTowers(towers) {
// 	return towers[towers.length-1].join().match(/#/g).length/2
// }
// console.log(countTowers([
// 	["     ##          "],
// 	["##   ##        ##"],
// 	["##   ##   ##   ##"],
// 	["##   ##   ##   ##"]
// ]))
//---------------------------------------------------------------
// class Triangle {
// 	constructor(a,b,c) {
// 	  this.a=a ;  
// 	  this.b=b;
// 	  this.c=c;
// 	}
// 	isValid(a,b,c){
// 	  return (a+b>c&&a+c>b&&c+b>a)&&(a>0&&b>0&&c>0)
// 	}
// 	sameLength(a,b,c){
// 		return a==b&&b==c
// 	}
// 	twoSides(a,b,c){
// 		return a==b||a==c||b==c
// 	}
// 	differentLength(a,b,c){
// 		return a!==b&&b!==c&&a!==c
// 	}

// 	isEquilateral() {
// 	  return this.allSameLength(this.a,this.b,this.c)&& this.isValid(this.a,this.b,this.c)
// 	}
// 	isIsosceles() {
// 	  return this.twoSides(this.a,this.b,this.c)&& this.isValid(this.a,this.b,this.c)
// 	}
// 	isScalene() {
// 	  return this.differentLength(this.a,this.b,this.c)&& this.isValid?false:true
// 	}
// }


// console.log(new Triangle(8,8,7).isScalene())
//----------------------------------------------------------------------
// function replaceThe(str) {
// 	return str.replace(/the (?=a|e|i|o|u)/,'an ').replace(/the (?!a|e|i|o|u)/g,'a ')
// 	// let arr=str.match(/the/g)
// 	// return arr
// }
// console.log(replaceThe("the dog and the envelope"))
//--------------------------
// const checkAllitemsSame=arr=>{

// }
// console.log(checkAllitemsSame([9,9,9]))
//-------------------------------------------------------------
// console.log('<h1>Hello, world!</h1>'.match(/<(.*?)>/g));
//-------------------------------------------------------------

// class Triangle {
// 	constructor(a,b,c) {
// 	  this.a=a ;  
// 	  this.b=b;
// 	  this.c=c;
// 	}
	
// 	get isValid(){
// 	  return (this.a+this.b>this.c&&this.a+this.c>this.b&&this.c+this.b>this.a)&&(this.a>0&&this.b>0&&this.c>0)
// 	}
// 	get matchingSidesOcc(){
// 		let counter=[]
// 		let sorted=[this.a,this.b,this.c].sort()
// 		for(let i=0;i<sorted.length-1;i++){
// 		  sorted[i]==sorted[i+1]?counter.push(i,i+1):0
// 		}
// 		let mySet=new Set(counter)
// 		return mySet.size
// 	}
  
// 	isEquilateral() {
// 	  return this.matchingSidesOcc>2&&this.isValid
// 	}
  
// 	isIsosceles() {
// 	  return this.matchingSidesOcc>1&& this.isValid
// 	}
  
// 	isScalene() {
// 	  return this.matchingSidesOcc==0&& this.isValid
// 	}
//   }
//   console.log(new Triangle(0,8,9).isScalene())
//-----------------------------------------------------------
// function matchingSidesOcc(a,b,c){
// 	let counter=[]
// 	let sorted=[a,b,c].sort()
// 	for(let i=0;i<sorted.length-1;i++){
// 	  sorted[i]==sorted[i+1]?counter.push(i,i+1):0
// 	}
// 	let mySet=new Set(counter)
// 	return mySet.size
// }

// console.log(matchingSidesOcc(8,7,9))
//-------------------------------------------------------
// let counter=0 
// const steps = (num) => {
// 	if (num==1)return 0
// 	if (num%2==0){ 
// 		counter+=1
// 		steps(num/2)
// 	}
// 	else{
// 		counter+=1
// 		steps(num*3+1)
// 	}
// 	return counter
// // };
//------------------------------------------------
// ***// RECURSIVE
// const steps = (num) => {
//     if (num==1){return 0}
//     else if (num%2==0){ 
//     let counter=steps(num/2)
//     counter++
//     return counter
//     }
//     else{
//         let addCounter=steps((num*3)+1)
//         addCounter++
//         return addCounter
//     }
//   }
//   console.log(steps(5))
//-----------------------------------------------------
// const isPangram = (str) => {
// 	if (!str)return false
// 	let sorted=str.match(/[a-zA-Z]/g).map(x=>x.toLowerCase().charCodeAt(0)).sort()
// 		for(let i=0;i<sorted.length-1;i++){
// 			if (sorted[i+1]-sorted[i]>1)return false
// 		}
// 		return true
// };
// console.log(isPangram('the quick brown Fox jumps over the lazy dog'))
//-------------------------------------------------------
function countVowels(str) {
	if (/[aeiou]/gi.test(str)==false)return 0;
	let counter=countVowels(str.slice(1,-1))
	counter++
	return counter
}
console.log(countVowels(`I'm waiting here with my heart`))