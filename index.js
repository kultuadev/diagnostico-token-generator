function randomTokens(codCliente, qntsToken, limit) {

    let tokens = []
    const nroChars = limit - codCliente.length

    while (tokens.length < qntsToken) {
        let chars = randomChar(nroChars)
        const rndInt = Math.floor(Math.random() * nroChars)

        let startToken = chars.slice(0, rndInt)  
        let endToken = chars.slice(rndInt)  

        let token = startToken + codCliente + endToken

        
        console.log(token)
        tokens.push(token)
    }

    return tokens.toString()
}

function randomChar(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const btnGerar = document.getElementById("btnGerar")
btnGerar.addEventListener("click", generateTokens)

function generateTokens() {
    let codCliente = document.getElementById("codCliente").value
    let qntTokens = document.getElementById("qtnTokens").value
    let limit = document.getElementById("limitChars").value

    tokens = randomTokens(codCliente, qntTokens, limit)

    let table = document.querySelector("table")
    tokens.forEach(token => {
        let row = table.insertRow()
        let cell = row.insertCell()
        let text = document.createTextNode(token)
        cell.appendChild(text)
        
    });
}
