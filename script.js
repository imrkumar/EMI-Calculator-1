function calculate(){
    var amount = document.getElementById('amount').value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("year").value;
    

    rate = rate/(12*100);
    years = years*12;

    var interest = (amount*rate * Math.pow(1+rate,years))/(Math.pow(1+rate,years)-1);
    // var interest = amount*rate*(1+rate)*(years)/((1+rate)*years-1);

    document.getElementById("result").innerHTML= "&#8377;"+ Math.round(interest);
    
}

