/* Psudocode:
all arrays will be printed out first
as constants then the ideal function for 
this will take in each upon every function call
for the specific output. Creating a list of outputs
as the assignment expects. 
Each one in the format of an array within brackets.
Also, each array being odd numbers only.

I will use array functions and conditionals as well as
loops to find the evens and zeros. then pop them off.
and let that array return when the index of i 
from the loop process reaches the length of the
array being mutated.
*/

// Arrays
let fst = [2, 4, 6, 8, 11, 20, 15, 22];
let snd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let thrd = [70, 42, 55, 81, 21, 91, 34];
let frth = [2, 4, 6, 8, 10, 11, 12];

// this function will take in the array and return the odd numbers only
// by way of copying the odd values and putting them in
// even number
// through loops and conditionals
let i = 0;
let odd = [];
function oddsOnly(a = []) 
{
    a.forEach(e => {
        if (e % 2 != 0) 
        {
            odd.push(e);
        }
    });
    return odd;
}

// run one of these at a time.

//console.log(oddsOnly(fst));

//console.log(oddsOnly(snd));

//console.log(oddsOnly(thrd));

//console.log(oddsOnly(frth));

// for my next victim, I will use 
// if statements and incrementors
// to read vowels and consonants
// using one to one boolean Arguments
// then print out how much of each are

let h = "hello";
let u = "ukelele";
let aw = "awesome";
let ono = "onomonopia";
let tex = "textbook";

let v = 'aeiou';

let consonants = 0;
let vowels = 0;

consF = (e = "") =>
{
    for (let i = 0; i < e.length; i++) 
    {
        if(e.charAt(i) == 'a')
        vowels++;
        if(e.charAt(i) == 'e')
        vowels++;
        if(e.charAt(i) == 'i')
        vowels++;
        if(e.charAt(i) == 'o')
        vowels++;
        if(e.charAt(i) == 'u')
        {
            vowels++;
        }
        else{
            consonants++;
        }
    }
    console.log(e + " has " + vowels + " vowels "+"and " + consonants + 
    " consonants");
}

// run one of these at a time
//consF(h);

//consF(u);

//consF(aw);

//consF(ono);

//consF(tex);

//reverse array

let one = [1, 2, 3];
let two = [1, 3, 5, 7, 9, 11];
let tre = [20, 50, 30, 60, 200];
let four = [1, -1, 2, -3, 5, -8, 13];

// function copies the old array
// uses the reverse function and
// reverses the order of the array
// and copies the values to another 
// new array
revFa = (a) =>
{
    b = a.reverse();
    console.log(b)
}
//revFa(one);
//revFa(two);
//revFa(tre);
//revFa(four);

/* 
another method would be to take the 
last number of the index and assign it to
the front using push and a second indexer
to also have a -1 for the positioning.
*/
revFb = (b) =>
{
    c = [];
    icv = b.length - 1;
    for (let i = 0; i < b.length; i++)
    {
        c.push(b[icv]);
        --icv;
    }
    return c;
}
//console.log(revFa(one));
//console.log(revFa(two));
//console.log(revFa(tre));
//console.log(revFa(four));

/*
    Now its time for FizzBuzz
    time to make an algorithm 
    that eats 3, 5 or 15 and
    spits out Fizz, Buzz or FizzBuzz
    we have a number of 100
    and each number needs to
    be compared to 3 , 5 or 15
    15 first
    3 next 
    and 5 last
    all comparisons using the mod
    operator
*/
fizzbuzz = () =>
{
    for (let i = 1; i <= 100; i++) 
    {
        if (i % 15 == 0) {
            console.log(i+" FizzBuzz");
        }
        else if (i % 3 == 0)
        {
            console.log(i+" Fizz");
        }
        else if (i % 5 == 0)
        {
            console.log(i+" Buzz")
        }
    }
}

fizzbuzz();