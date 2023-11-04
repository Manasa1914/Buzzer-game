let couples=[
    {
        gf:"Manasa",
        bf:"Nani"

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
        gf:"Rushmitha",
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
        bf:"sathya",
        gf:"gopi"

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