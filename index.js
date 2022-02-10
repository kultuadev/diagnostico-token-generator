function randomTokens(codCliente, qntsToken, limit) {

    let tokens = []
    const nroChars = limit - codCliente.length

    while (tokens.length < qntsToken) {
        let token = ""
        do
        {
            let chars = randomChar(nroChars)
            const rndInt = Math.floor(Math.random() * nroChars)

            let startToken = chars.slice(0, rndInt)  
            let endToken = chars.slice(rndInt)  

            token = startToken + codCliente + endToken
        }
        while (tokens.includes(token))
        tokens.push(token)    
    }

    return tokens
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
    clearTokens()

    let codCliente = document.getElementById("codCliente").value
    let qntTokens = document.getElementById("qtnTokens").value
    let limit = document.getElementById("limitChars").value

    tokens = randomTokens(codCliente, qntTokens, limit)
    let table = document.querySelector('table')
    tokens.forEach(token => {
        let row = table.insertRow()
        let cell = row.insertCell()
        let text = document.createTextNode(token)
        cell.appendChild(text)
        
    });
}

const btnLimpar = document.getElementById("btnLimpar")
btnLimpar.addEventListener("click", clearTokens)

function clearTokens() {
    let table = document.querySelector('table')
    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild)
    }
}
