function repeat(operation, num) {
    if(num <= 0) {
        return;
    }
    operation();
    return repeat(operation, --num);
}
module.exports = repeat
// repeat(function(){console.log("Hello")}, 5);