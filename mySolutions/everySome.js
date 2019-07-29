module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        submittedUsers.every(user => user.some(goodUsers.id))
    }
}