// complete the given function

function palindrome(str){
str = str.split("");
	while(str.length){
		if(str[0] === str[str.length-1]){
		str.shift();
			str.pop()
	}
	else{
	    return false
	}
	}
	if(str.length === 0){
	    return true
	}
	
}
module.exports = palindrome
