
//Array som lar brukeren velge måned i rullemenyen.
var maaned = new Array();
    maaned[0] = "Januar";
    maaned[1] = "Februar";
    maaned[2] = "Mars";
    maaned[3] = "April";
    maaned[4] = "Mai";
    maaned[5] = "Juni";
    maaned[6] = "Juli";
    maaned[7] = "August";
    maaned[8] = "September";
    maaned[9] = "Oktober";
    maaned[10] = "November";
    maaned[11] = "Desember";

var dato = new Date();


var m = dato.getMonth();

for (x in maaned) {
    document.getElementById("utgift-maaned").innerHTML += "<option value="+maaned[m]+">"+maaned[m]+"</option>";
    if (m < 11) {
        m += 1;
    } else {
        m = 0;
    }
       
}


var data = fildata = JSON.parse(localStorage.getItem("oversiktData")); 
if (data == null) {
    data = [];
} 


//Funksjon som fremviser utgiftskategoriene i data
lagKategorier();
function lagKategorier() {
    console.log(data);
    var katEl = document.getElementById("utgift-kategorier");

    if (data.length == 0 ) {
        katEl.innerHTML = "<option value='' disabled selected>Ingen kategori</option>";
    } else {
        katEl.innerHTML = " ";
    }
    

    for (i in data) {
        katEl.innerHTML += "<option value="+data[i].navn+">"+data[i].navn+"</option>";
    }

}

//Funksjon som legger til den nye kategorien i data-arrayen
function addKategori(navn, utgifter, budsjett) {
    console.log("adder kategori");
    for (x in data) {
        console.log(data[x]);
        if (data[x].navn == navn) {
            console.log("false");
            return false; 
        }
    }
    let kategori = {
        navn: navn,
        utgifter: utgifter,
        budsjett: budsjett,
    };

    data.push(kategori);
    lagKategorier();
    localStorage.setItem("oversiktData", JSON.stringify(data));
    return true;
}

//Funksjon som legger til en utgift på rett kategori-objekt i data-arrayen
document.getElementById("addUtgiftButton").addEventListener("click", addUtgift)
function addUtgift() {
    kategori = document.getElementById;

    for (x in data) {
        if (data[x].navn == document.getElementById("utgift-kategorier").value) {
            console.log("kategori er " + data[x].navn);
            data[x].utgifter.push(document.getElementById("utgift-sum").value);
        }
    }
    
    localStorage.setItem("oversiktData", JSON.stringify(data));
}

//Funksjon og eventlistener som lager kategori fra brukerens input.
document.getElementById("nyKategoriButton").addEventListener("click" , lagNyKategori);
function lagNyKategori() {
    let inputValue = document.getElementById("nyKategoriInput").value;
    if (inputValue != "") {
        console.log("Lager ny kategori");
        addKategori(inputValue,[0],0);
    }

    localStorage.setItem("oversiktData", JSON.stringify(data));
}



/*

function change() {
    
    var input = document.getElementById("knew_input");
    input.disabled = false;
    input.style.transition = "width 0.2s ease";
    input.style.width = "160px";
    input.value = "";
    input.focus()

    document.getElementById("knew").removeEventListener("click", change);
    input.addEventListener("change", dubblec);
    input.mouseout
    function dubblec() {
        input.disabled = true; 
        input.removeEventListener("change", dubblec);
        
        check = true
        for (x in data) {
            if (data[x][0] == input.value) {
                check=false
            }
        }
        if (check) {
            data.push([input.value , [] , 0]);
            localStorage.setItem("fildata", JSON.stringify(data));
            lagkat()
        } else {
            input.value = input.value + " finnes allerede"
            setTimeout(function(){ input.value = "+"}, 1000);
            document.getElementById("knew").addEventListener("click", change);
        }
        
    }
}

*/
