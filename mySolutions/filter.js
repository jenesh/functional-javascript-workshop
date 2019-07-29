// module.exports = function getShortMessages(messages) {
//     let arr = [];
//     messages.filter(obj => obj.message.length < 50 ? arr.push(obj.message) : false);
//     return arr;
// }
function shortString(txt) {
    return txt.length < 50
}
function getMessage(obj) {
    return obj.message
}
module.exports = function getShortMessages(message) {
    return message.map(getMessage).filter(shortString);
}

// console.log(getShortMessages(["safds",'asdfasdfafds']))