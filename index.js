function writeCards(name, greeting) {
    let messages = []
    for (let i = 0; i < name.length; i++) {
        let array = name[i]
        let message = (`Thank you, ${name[i]}, for the wonderful surprise gift!`)
        messages.push(message)
    }
    return messages
}

const number = []
function countDown(number) {
    let i = 10;
    while(i >= 0) {
        console.log(i--)
    }
}