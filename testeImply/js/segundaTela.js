function dados(){
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    var dolarUS = document.getElementById("dolarUS")
    var dolarBR = document.getElementById("dolarBR")
    var euro = document.getElementById("euro")
    
    fetch(url, {method: 'GET'})
        .then(
            response =>{
                response.json()
                .then(data => {
                    dolarUS.innerText = data.bpi.USD.description + ": $" + data.bpi.USD.rate
                    dolarBR.innerText = data.bpi.GBP.description + ": £" + data.bpi.GBP.rate
                    euro.innerText = data.bpi.EUR.description + ": €" + data.bpi.EUR.rate
                    console.log(data)
                })
            })
            
}

window.onload = dados