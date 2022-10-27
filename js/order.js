function total() {
    var RooibosTea;
    var Black ;
    var Chocolate;
     var Oolong;
     var Tulsi;
     var Rose;
     var Herbal;
     var Jasmine;
     var Green;
    

    var sum;
    RooibosTea = parseInt(document.getElementById("qty1").value);
    Black = parseInt(document.getElementById("qty2").value);
    Chocolate = parseInt(document.getElementById("qty3").value);
    Oolong = parseInt(document.getElementById("qty4").value);
    Tulsi = parseInt(document.getElementById("qty5").value);
    Rose = parseInt(document.getElementById("qty6").value);
    Herbal = parseInt(document.getElementById("qty7").value);
    Jasmine = parseInt(document.getElementById("qty8").value);
    Green = parseInt(document.getElementById("qty9").value);


    sum = (RooibosTea * 30) + (Black * 40) + (Chocolate * 20)+(Tulsi * 20) + (Tulsi * 5) + 
    (Rose * 30)+(Herbal * 15) + (Jasmine * 30) + (Green * 20);
    document.getElementById("total_cost").innerHTML = "₹ "+sum+".00";

  }
  function submit() {
    alert("Your Order has been Submitted, Successfully!");
  }