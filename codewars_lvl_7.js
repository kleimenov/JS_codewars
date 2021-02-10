/*
Quiz #1

In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year 
and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p inhabitants?
*/

function nbYear(p0, percent, aug, p) {
  percent = percent / 100;
  let cnt = 0;
  let newPopulation = p0;
  while (newPopulation < p) {
    newPopulation = newPopulation + newPopulation * percent + aug;
    ++cnt;
  }
  return cnt;
}

/*
Quiz %2
This time no story, no theory. The examples below show you how to write function accum:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
  var newS = "";
  for (var i = 0; i < s.length; ++i) {
    newS += s[i].toUpperCase();
    for (var j = 0; j < i; ++j) {
      newS += s[i].toLowerCase();
    }
    newS += "-";
  }
  return newS.slice(0, newS.length - 1);
}

//or

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

/*
Quiz #3
Kevin is noticing his space run out! 
Write a function that removes the spaces from the values 
and returns an array showing the space decreasing. 
For example, running this function on the array ['i', 'have','no','space'] 
would produce ['i','ihave','ihaveno','ihavenospace'].
*/

function spacey(array) {
  for (var i = 1; i < array.length; ++i) {
    array[i] = array[i - 1] + array[i];
  }
  return array;
}

/*
Quiz #4
You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/

function getMiddle(s) {
  let evenNumber = 0;
  let oddNumber = 0;
  let middleLetters = "";
  if (s.length <= 1) {
    middleLetters = s;
  } else if (s.length % 2 === 0) {
    evenNumber = s.length / 2;
    middleLetters = s[evenNumber - 1] + s[evenNumber];
  } else {
    oddNumber = Math.floor(s.length / 2);
    middleLetters = s[oddNumber];
  }

  return middleLetters;
}

// or

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/*
Quiz #4
Trolls are attacking your comment section!
A common way to deal with this situation 
is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

/*
Puzzle #5
There are some apples that you want to give out as a present. 
You are going to distribute them between some gift boxes in such 
a way that all the boxes will contain an equal number of apples. 
You can leave out some of the apples, but no more than maxResidue. 
You also don't want to leave out more apples than necessary; that is, 
if each box contains x apples, the number of left out apples should be less than x.
Assume that you have an infinite number of gift boxes, and that all of them have 
the capacity of boxCapacity. In how many ways can you distribute the apples satisfying 
all of the above conditions?
*/

function applesDistribution(apples, boxCapacity, maxResidue) {
  let combinationOne = 0;
  let cnt = 1;
  while (cnt <= boxCapacity) {
    console.log("number of apples in the box " + cnt);
    if (apples % cnt === 0 || apples % cnt <= maxResidue) {
      console.log(apples % cnt);
      combinationOne++;
    }
    cnt++;
  }
  return combinationOne;
}

console.log(applesDistribution(50, 20, 2));

// or (it isn't my solutions)
function applesDistribution(apples, boxCapacity, maxResidue) {
  return Array.from({ length: boxCapacity }, (_, i) => i + 1).filter(
    (x) => apples % x <= maxResidue
  ).length;
}

/*
Puzzle #6

*/

let a = 17; //-466;
let b = 17; //-217;

function getSum(a, b) {
  let sum = 0;
  if (a < b || a <= 0) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  if (a > b) {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  }
  if (a === b) {
    sum = a;
  }
  return sum;
}

// or (it isn't my solution)

const getSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

console.log(getSum(a, b));
