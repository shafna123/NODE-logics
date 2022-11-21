let first = 0

let second = 1

let n=10

let third =first+second

process.stdout.write(`${first} ${second}`)

let i=1

while (i<10) {

   

    process.stdout.write(` ${third}`)

    first=second

    second=third

    third=first+second

    i++



}