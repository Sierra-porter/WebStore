let skiBtn = document.getElementById("skiBtn")
let boardBtn = document.getElementById("boardBtn")
let gearBtn = document.getElementById("gearBtn")
let startBtn = document.getElementById("startBtn")
skiBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    let messge = {
        "category" : "ski"
    }
    xhr.open('GET','/available?messge=' + JSON.stringify(messge),true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})

boardBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    let messge = {
        "category" : "snowboard"
    }
    xhr.open('GET','/available?messge=' + JSON.stringify(messge),true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})

gearBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    let messge = {
        "category" : "helmet"
    }
    xhr.open('GET','/available?messge=' + JSON.stringify(messge),true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})

startBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET','/articles',true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState != 4)return
        alert(xhr.responseText)
    }
    xhr.send()
})