module.exports = function getShortMessages(messages) {
    let arr = [];
    messages.filter(obj => obj.message.length < 50 ? arr.push(obj.message) : false);
    return arr;
}