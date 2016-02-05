var sheets = require('./index');

console.log(Object.keys(sheets).every(function(sheetName) {
    return (
        typeof sheets[sheetName].getQuestions === 'function' &&
        typeof sheets[sheetName].getChoices   === 'function' &&
        typeof sheets[sheetName].calculate    === 'function'
    )
}))
