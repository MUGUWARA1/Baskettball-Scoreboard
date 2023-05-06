let affichageHome = document.getElementById("homer")
let affichageGuest = document.getElementById("guestr")
let i=1
let counthome =0
let countguest = 0
function addhome1()
{
    counthome++;
    affichageHome.innerText=counthome
}

function addhome2()
{
    counthome+=2;
    affichageHome.innerText=counthome
}

function addhome3()
{
    counthome+=3;
    affichageHome.innerText=counthome
}



function addGuest1()
{
    countguest++;
    affichageGuest.innerText=countguest
}

function addGuest2()
{
    countguest+=2;
    affichageGuest.innerText=countguest
}

function addGuest3()
{
    countguest+=3;
    affichageGuest.innerText=countguest
}

function resethome()
{
    counthome=0;
    affichageHome.innerText=counthome

}

 function resetguest()
 {
    countguest=0
    affichageGuest.innerText=countguest


 }

 let saveResult = document.getElementById("resultat")

 function save()
 {
    
    

    let resultat=" \n---- Match "+ i + ":** Home :"+ counthome+ "  //Guest : " + countguest+"----"
    saveResult.textContent+=resultat
    i++

 }