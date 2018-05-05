//Build a function, random_range, that takes 2 parameters, start_num and end_num. 
//OPTIONALLY: If start_num is an array instead (and end_num isn't specified), then it returns a random element from the array

function random_range(start_num, end_num) {
	var randomNum = 0;
	randomNum = Math.floor(Math.random()*(end_num-start_num)+start_num);
	return randomNum;
}

random_range(2, 5);
