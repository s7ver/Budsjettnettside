
    var data = fildata = JSON.parse(localStorage.getItem("oversiktData"));

    if (data == null) {
        data = [];
    }

//Funksjon som lager listen med utgifter og inputfelt
    function opprettUtgifterBudsjettListe() {
        console.log(data);

        const utgiftposterEl = document.getElementById("u-poster");
        utgiftposterEl.innerHTML = "";
        count = 0;
        for (x in data ) {
            let tr = document.createElement("TR");
            tr.className = "u-post";

            let th = document.createElement("TH");
            th.append(data[x].navn);
            tr.append(th);

            let td = document.createElement("TD");
            let input = document.createElement("INPUT");
            input.type = "text";
            input.id = "bu" + count ;
            input.value = data[x].budsjett;
            td.append(input);
            tr.append(td);

            utgiftposterEl.prepend(tr);


            count += 1;
            
        }

    }

    opprettUtgifterBudsjettListe();

//En eventlistener og funksjon som lagrer budsjettet når en trykker på lagre. 
    document.getElementById("add-kategori-lagre").addEventListener("click", lagreBudsjett);
    function lagreBudsjett() {

        for (x in data) {
            id = "bu" + x;
            data[x].budsjett = document.getElementById(id).value;
        }

        console.log(data);

        localStorage.setItem("oversiktData", JSON.stringify(data));    
    }


//Funksjon som legger til en ny kategori i data
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
        opprettUtgifterBudsjettListe();
        localStorage.setItem("oversiktData", JSON.stringify(data));
        return true;

    }   

//En eventlistener og funksjon som legger til en kategori i budsjettet ved hjelp av addKategori-funbksjonen.
    document.getElementById("add-kategori-button").addEventListener("click", lagNyKategori);
    function lagNyKategori() {
        let inputValue = document.getElementById("add-kategori-input").value;
        if (inputValue != "") {
            console.log("Lager ny kategori");
            addKategori(inputValue,[0],0);
        }
        localStorage.setItem("oversiktData", JSON.stringify(data));
    }