function saveTeam(){

    document.getElementById("name").disabled = true;
    document.getElementById("history").disabled = true;
    document.getElementById("yearOfEstablishment").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("country").disabled = true;

    document.getElementById("football").disabled = true;
    document.getElementById("volleyball").disabled = true;
    document.getElementById("handball").disabled = true;
    document.getElementById("basketball").disabled = true;

    document.getElementById("save").className = "hidden";
    document.getElementById("message").className = "shown message";
}

function addPlayer(){
    
    document.getElementById("form").className = "form-shown";

    index = -1;
}

var index = -1;

function editPlayer(rowIndex){

    document.getElementById("form").className = "form-shown";

    index = rowIndex;

    document.getElementById("number").value = document.getElementById("players").rows[index].cells[1].innerHTML.trim();
    document.getElementById("name").value = document.getElementById("players").rows[index].cells[2].innerHTML.trim();
    document.getElementById("joinDate").value = document.getElementById("players").rows[index].cells[3].innerHTML.trim();
}

function savePlayer(){

    document.getElementById("form").className = "form-hidden";

    if(index == -1){
        
        var row = document.getElementById("players").insertRow(-1);
        
        var cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";

        index = row.rowIndex;
    }

    document.getElementById("players").rows[index].cells[0].innerHTML = index;
    document.getElementById("players").rows[index].cells[1].innerHTML = document.getElementById("number").value;
    document.getElementById("players").rows[index].cells[2].innerHTML = document.getElementById("name").value;
    document.getElementById("players").rows[index].cells[3].innerHTML = document.getElementById("joinDate").value;
    document.getElementById("players").rows[index].cells[4].innerHTML = "<button onclick=\"editPlayer(" + index + ")\">Edit Player</button>";
    
}