const fs = require('fs')
const rl = require('readline')
const result = fs.readFileSync('question.json', 'Utf-8')
const result1 = fs.readFileSync('question.json', 'UTF-8')
let res =  result ? JSON.parse(result): []
let user = result1 ? JSON.parse(result1) : []

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function *gen(){
    for(let i = 0; i<res.length; i++){
        yield res[i].question
    }
}
function * gen1(){
    for(let i = 0; i < res.length; i++){
        yield 'A)'
    }
}