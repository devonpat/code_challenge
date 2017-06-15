Complete the following challenges:




//write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. 
//the string should start with a 1. a string with size 6 should return :'101010'. 
//with size 4 should return : '1010'. with size 12 should return : '101010101010'. 
//The size will always be positive and will only use whole numbers.

/*
1. create a function named stringy
2. stringy needs to accept an argument 'size'
3. stringy needs to return a string of alternating '1s' and '0s'
4. the returned string needs to start with 1 (for example a string with size 6 should return :'101010'.)
assume - The size will always be positive and will only use whole numbers.

process:
1. create a function named stringy
2. stringy needs to accept an argument 'size'
3. stringy needs to return a "10" repeated the same number of times returned from size (for example 1010 would come from size=2)


function stringy(size) {

}
*/





/*
//Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]


1. create a function that accepts an integer string as the arguement
2. create an array
3. input 348597 as the arguement
4. convert the string to integers
4. take the last number from the integer string and push it to the array
5. move to the next number in the integer string and repeat step 4 until all the numbers from the integer string have been pushed to the array
6. log the array

function reverse(string) {
	numbers = []
	parsInt(this.string);
	// ran out of time but create a loop that splices the last number and pushes it to numbers[]
}
*/





/*
//Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
//0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …
//Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

1. create a function that accepts a number arguement
2. use the number from the arguement to create the number of revolutions from the sequence
3. create a loop sequence that tracks all 3 of the current numbers in the sequence
4. start the sequence loop and log the result
5. move to the next revolution of the sequence and log the result.
6. repeat step 4 for however many revolutions have been passed in from the function arguement.

function fibonacci() {
	var firstNumber = 1
	var secondNumber = 1
	var answer = (firstNumber * secondNumber)
}
*/





/*
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes 
// or using expired coupons.
// Write a function called checkCoupon to verify that a coupon is valid and not expired. 
// If the coupon is good, return true. Otherwise, return false. 
// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

1. write a function that accepts a coupon code as an arguement
2. create an array with all the current coupon codes contained within the array
3. check the code from the function argument against the codes in the array
4. if the code is exactly equal to a code in the array move to step 5
5. check to make sure todays date is before the expiration date on the coupon

function checkCoupon(code, couponDate){
	let couponCode = [];
	if (this.code === couponCode[i]) {
	}and (current Date <= couponDate) {
		alert('congrats')
	}
}
*/






//Write a function to test whether a given input is a valid email address. 
//For the purposes of this assessment, here is what makes a valid email: At least one letter character at the beginning. 
//All characters between the first character and the @ (if any) must be letters, numbers, or underscores. 
//There must be an @ character (after the points listed just now). After the @ character, there must be at least one 
//word character (letter, number, or underscore) or hyphen. The email must end with at least one set of a dot followed by one or 
more word characters. The input must NOT be case-sensitive. The function should return true or false.

1. write a function that accepts an email address as an arguement
2. create an email input field
3. create a submit button
4. check that the submitted email address contains at least 1 letter at the begining of the submitted string
5. if yes, check the submission for an @ sign
6. if yes, check the submission to be sure all characters before the @ sign are letters, numbers or underscores
7. if yes, check the submission for a character after the @ sign
8. if yes, check the submission for a .
9. if yes, check the submittion for a character after the .
10. if yes, return true. if no return false

