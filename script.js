function addition (num1, num2) {
    return num1 + num2
}

console.log(addition(3, 5))

function hoursIntoSeconds (hour) {
    return hour * 3600
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24)) 

function calcPerimeter (length, width) {
    return (length + width) * 2
}

console.log(calcPerimeter(6, 7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2, 9))

function calcAreaOfTriangle (length, width) {
    return (length * width / 2)
}

console.log(calcAreaOfTriangle(20, 20))

function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'))
console.log(appendFrontend('Banana'))
console.log(appendFrontend('Orange'))

function sumGreaterThan100 (num1, num2) {
    return num1 + num2 > 100
}

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))

function lessThanOrEqualToZero (num1) {
    return num1 <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

function oppositeBoolean(boolean){
    return !boolean
}

console.log(oppositeBoolean (true))
console.log(oppositeBoolean (false))

function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

function calcReamainder(num1, num2) {
    return num1 % num2
}

console.log(calcReamainder(4, 2))
console.log(calcReamainder(7, 8))
console.log(calcReamainder(9, 8))

function isOdd (num) {
    return 1 === num % 2
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

function booleanInteger(num) {
    //Return 1 if even otherwise return -1//
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED'
}


console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))


function isLoggedInOrSubscribed(loggedIn, subscribed) {
    return loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED'
}

console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))