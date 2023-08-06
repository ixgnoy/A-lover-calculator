function calculatelove(){

    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
              
    if(name1=="" || name2==""){
        alert("Please enter both names!");
    }else{
        const lovePercentage= Math.floor(Math.random()* 101);
        const result=document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;
        if(lovePercentage < 30){
            result.innerHTML += "<br> Not a great match :(  <br> Keep Looking."
        }else if(lovePercentage >=30 && lovePercentage <=70){
            result.innerHTML += "<br> There's potential. Give it a try :)"
        }else{
            result.innerHTML += "<br> You two are a match made in heaven!"
        }
    }
}