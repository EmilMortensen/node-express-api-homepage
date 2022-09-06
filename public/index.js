console.log('hejsa')

let fodboldklubDiv = document.querySelector('#fodboldklubber')
fodboldklubDiv.style.top = '0'

document.querySelector('#fodboldklubber h2').addEventListener('click', ()=>{
    if(fodboldklubDiv.style.top == '90vh'){
        fodboldklubDiv.style.top = 0;
    }else{
        fodboldklubDiv.style.top = '90vh';
    }

})

document.querySelector('#submitH').addEventListener('click', ()=>{
    fetch('http://localhost:1892/api/fodboldklubber')
    .then(res => res.json())
    .then(json => document.querySelector('#fodboldklubber .json').innerHTML = JSON.stringify(json))
})