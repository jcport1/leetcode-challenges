// You are climbing a staircase. It takes n steps to reach the top.
//https://www.youtube.com/watch?v=5o-kdjv7FD0
//https://www.programiz.com/javascript/examples/fibonacci-series

// Each time you can either climb 1 or 2 steps. 
//In how many distinct ways can you climb to the top?

//dynamic programming
//you can solve top down or bottom up

var climbStairs = function(n) {
    //bottom up approach
    let previous = 0;
    let current = 1;
    let temporary;
    
    for(let i= 0; i < n; i++){
        temporary = previous;
        console.log(temporary)
        previous = current;
        console.log(previous)
        current += temporary;
        console.log(current)
    }
    console.log(current)
    return current;
    
};

climbStairs(4);