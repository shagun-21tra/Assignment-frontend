// 6.2 Analyzing Voter Participation
// You are given an array voters containing information about individuals who participated in a recent election. Each element of the array represents a voter with properties for their name, age, and whether they voted (voted).

// Your task is to write a function analyzeVoterData to analyze this data and calculate the following statistics:

// Number of Young Voters: Count of voters aged 18-25 who voted.
// Number of Young People: Count of individuals aged 18-25, regardless of whether they voted.
// Number of Middle-Aged Voters: Count of voters aged 26-35 who voted.
// Number of Middle-Aged People: Count of individuals aged 26-35, regardless of whether they voted.
// Number of Older Voters: Count of voters aged 36 and above who voted.
// Number of Older People: Count of individuals aged 36 and above, regardless of whether they voted.
// Your function should take the voters array as input and return an object with the calculated statistics as shown below:

// {
//   numYoungVotes: /* Number of young voters (aged 18-25) who voted */,
//   numYoungPeople: /* Number of young people (aged 18-25) */,
//   numMidVotesPeople: /* Number of middle-aged voters (aged 26-35) who voted */,
//   numMidsPeople: /* Number of middle-aged people (aged 26-35) */,
//   numOldVotesPeople: /* Number of older voters (aged 36 and above) who voted */,
//   numOldsPeople: /* Number of older people (aged 36 and above) */
// }
// Your solution should be implemented in JavaScript.

// Example:
// Given the input array voters provided above:

// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// console.log(analyzeVoterData(voters));
// The output object should be:

// {
//   numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4
// }

// Constraints:
// use .reduce() method to solve
// The input array voters will contain at most 100 elements.
// Each voter's age will be a positive integer.
// The voted property of each voter will be a boolean indicating whether they voted (true) or not (false).





function analyzeVoterData(voters){
    return voters.reduce((acc,{age,voted})=>{
        if(age>=18 && age <=25){
            acc.numMidsPeople++;
            if(voted)
        }
    })
},
{
    numYoungVotes: /* Number of young voters (aged 18-25) who voted */,
    numYoungPeople: /* Number of young people (aged 18-25) */,
    numMidVotesPeople: /* Number of middle-aged voters (aged 26-35) who voted */,
    numMidsPeople: /* Number of middle-aged people (aged 26-35) */,
    numOldVotesPeople: /* Number of older voters (aged 36 and above) who voted */,
    numOldsPeople: /* Number of older people (aged 36 and above) */
  }
  