//Задача 1

function func1() {
function succession(num1, num2) {
    let array = []
if (num1 - num2 > 0) {for (let i = num1; i >= num2; i--) {
    if (i % 2 == 0) {array.push(i)} 
} 
}
        else {for (let i = num2; i >= num1; i--) {
            if (i % 2 == 0) {array.push(i)} 
        }
    }

console.log(array)
}

succession(22, 15)
}

//Задача 2
function func2() {
function power (base, powerItself) {
    let result = base ** powerItself
    return result
    }
let powerItself = 2
console.log(power(4, powerItself))
}

//Задача 3
function func3() {
function calcUntil(n) {
    let sum = 0
for (let i = 1; i <= n; i ++)
{sum += i
}
return sum

}
console.log(calcUntil(5))
}

// Задача 4
function func4() {
function calc(n, m) {
                let sumEven = 0
        let sumOdd = 0
        for (let i = n; i <= m; i++) {
        if (i % 2 == 0) {
            sumEven += i
        } 
        else {
            sumOdd += i
        }
           }
           console.log(sumEven)
           console.log(sumOdd) 
     
    }
    calc(5, 9)
}

// Задача 5
function func5() {
function compare(strings) {
    if (strings.length == 0) {console.log("Null")}
    let longString = ""
    for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longString.length) {
        longString = strings[i]}
    }
    console.log(longString)
        
    }

compare([])
}