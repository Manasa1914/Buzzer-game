let couples=[
    {
        gf:"Rajeena",
        bf:"Noel"

    },
    {
        gf:"Priya",
        bf:"Ravi"

    },
    {
        gf:"Vineela",
        bf:"Ashik"

    },
    {
        gf:"Ruthvika",
        bf:"Suga"

    },
    {
        gf:"Nandhu",
        bf:"Naveen"
    
    },
    {
        gf:"Bavya",
        bf:"Krishna"
    
    },
    {
        gf:"Radha",
        bf:"Gopal"

    },
    {
        gf:"Seetha",
        bf:"Ramu"

    },
    {
        gf:"sathya",
        bf:"gopi"

    },
    {
        gf:"Ramya",
        bf:"Krishna"

    },
    {
        gf:"Mahi",
        bf:"Madhu"
        
    }
];
let randonNumber=Math.floor(Math.random()*couples.length)
let result=document.getElementById("output")


function winnerOne(){
    result.innerHTML=couples[randonNumber].bf + "❤️ " + couples[randonNumber].gf
}

function winnerTwo(){
    result.innerHTML=couples[randonNumber].bf + "❤️ " + couples[randonNumber].gf
}

function winnerThree(){
    result.innerHTML=couples[randonNumber].bf + " ❤️" + couples[randonNumber].gf
}
