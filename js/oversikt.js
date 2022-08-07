
var data = fildata = JSON.parse(localStorage.getItem("oversiktData")); 
if (data == null) {
    data = [];
} 
//Funksjon som fremviser kategoriene, utgiftene og budsjettverdiene i data på oversikssiden.
console.log(data);
opprettOversikt();
function opprettOversikt() {
    table = document.getElementById("oversikt-table");
    if (data.length == 0) { console.log("no data");}
    else {
        for (x in data) {
            let tr = document.createElement("TR");
            
            let navn = document.createElement("TD");
            navn.innerHTML = data[x].navn;
            tr.append(navn);

            let utsum = 0;
            for (utgift in data[x].utgifter) {
                utsum += parseInt(data[x].utgifter[utgift]);
            }

            let sum = document.createElement("TD");
            sum.innerHTML = utsum;
            tr.append(sum);

            let bud = document.createElement("TD");
            bud.innerHTML = data[x].budsjett;
            tr.append(bud);

            let avik = document.createElement("TD");
            avik.innerHTML = data[x].budsjett - utsum;
            tr.append(avik);

            table.append(tr);
        }
    }  
}