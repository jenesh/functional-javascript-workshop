module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
    let count = 0;
    submittedUsers.every(user => 
        goodUsers.some(verifiedUsrs => verifiedUsrs.id === user.id)?
            count += 1 : count += 0);
        return count;
    }
}

// let arr1 = [
//     {id: 1},
//     {id: 2},
//     {id: 3}
// ]

// let arr2 = [
//     {id: 1},
//     {id: 2},
//     {id: 3},
// ];

// function check(arr, arr2) {
//     console.log(arr2.every(ele => arr1.some(ele2 => ele2.id === ele.id)));
// }
// console.log(checkUsersValid(arr1)(arr2));