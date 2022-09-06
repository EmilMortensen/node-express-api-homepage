//hent biblioteket IP 
const ip = require('ip')
//Fordi vi har hentet bibloteket IP kan vi få fat på vores ip adresse.
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 1892



//serve en statisk mappe i roden 
app.use('/', express.static('public'))


//hvis der kommet klienter til endpointet /hvaler
app.get('/api/fodboldklubber', (req, res)=>{
    const obj = {
        'Liverpool': {
            'Logo farve':'rød',
            'Champions League titler': '6',
        },
        'ManchesterCity': {
            'penge': 'olie',
            'Champions League titler': '0',
            'Saudi Arabien FC': 'true',
        },
        'United': {
            'ronaldo?': 'dårlig',
            'Champions League titler': '3 (Mindre end liverpool)',
            'Historie': 'Overrated',
        },
        'PSG': {
            'penge': 'olie',
            'Champions League titler': '0',
            'UAE FC': 'true',
        },
        'Real Madrid': {
            'penge': 'rig president',
            'Champions League titler': 'for mange (Rigged af UEFA)',
            'Ronaldo overvurderet?': 'true',
        },
        'Barcelona': {
            'penge': 'ja det ved ingen',
            'Champions League titler': 'Alle dem som Messi har skaffet dem',
            'Messi Goat?': 'true, verdens bedste!',
        }
    }
    res.send(obj)
})
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 