function fibonacci(n) {
    var output = [];

    //the nacci part of the code
    if (n === 1){
        output = [0];
    }
    else if (n === 2){
        output = [0, 1];
    } else {
        output = [0, 1];
        
        for (var i = 2; i < n; ++i) {
            var sum = (output[output.length - 1] + output[output.length - 2]);
            output.push(sum);
        }
    }

    //the fizzy part of the code
    var count = 0
    
    for (var x = 0; x <= output.length; ++x){
        
        var change = output.indexOf(output[count]);
        
        if (output[count]%3 === 0 && output[count]%5 === 0) {
        output[change] = "FiboNacci";   
        } else if (output[count]%3 === 0 && output[count]%5 !== 0){
        output[change] = "Fibo";
        } else if (output[count]%5 === 0 && output[count]%3 !== 0) {
         output[change] = "Nacci";
        }

        ++count;
    }
    
    
    console.log(output);
}

// to explain what this code does, it essentially generates n (the function input) amount of items in the fibonacci
// sequence, then it takes that sequence and runs each item through the fizzBuzz code and changes the numbers
// that meet it's requirements
// I did this by getting the index of the item at position 0 (the var count = 0), then checking that item
// against the fizzBuzz code. after, it increments count by one so that we can get the item at position 1
// and check that against the fizzBuzz code. so on and so forth until it's gone through the entire pre-generated fibonacci 
// array. it's able to go through the specific length of the fib array by x being less than or equal to the output.legnth
// which is the length of the pre-generated fibonacci sequence
