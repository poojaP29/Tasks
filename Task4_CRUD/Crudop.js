let selectedRow = null

function onFormsubmit(){
    if (validate()){
        let formData = readFormData();
        if(selectedRow == null)
          insertNewRecord(formData);
        else
          updateRecord(formData);
        resetForm();
    }
}
    function readFormData(){
    let formData={};
    formData["fullname"]= document.getElementById("fullname").value;
    formData["regno"]= document.getElementById("regno").value;
    formData["date"]= document.getElementById("date").value;
    formData["gender"]=document.querySelector('input[name="gender"]:checked').value;
    formData["place"]= document.getElementById("place").value;
    formData["percentage"]= document.getElementById("percentage").value;
    formData["hobbies"]=document.querySelector('input[name="hobbies"]:checked').value;
    formData["email"]=document.getElementById("email").value;
    formData["number"]=document.getElementById("number").value;
    return formData;
}


    function insertNewRecord(data) {
        let table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullname;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.regno;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.date;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.gender;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.place;
        cell6= newRow.insertCell(5);
        cell6.innerHTML = data.percentage;
        cell7= newRow.insertCell(6);
        cell7.innerHTML = data.hobbies;
        cell8= newRow.insertCell(7);
        cell8.innerHTML = data.email;
        cell9= newRow.insertCell(8);
        cell9.innerHTML = data.number;
        cell9 = newRow.insertCell(9);
        cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                           <a onClick="onDelete(this)">Delete</a>`;
    }
    
    function resetForm() {
        document.getElementById("fullname").value = "";
        document.getElementById("regno").value = "";
        document.getElementById("date").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("place").value = "";
        document.getElementById("percentage").value = "";
        document.getElementById("hobbies").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        selectedRow = null;
    }
    
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
        document.getElementById("regno").value = selectedRow.cells[1].innerHTML;
        document.getElementById("date").value = selectedRow.cells[2].innerHTML;
        document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
        document.getElementById("place").value = selectedRow.cells[4].innerHTML;
        document.getElementById("percentage").value = selectedRow.cells[5].innerHTML;
        document.getElementById("hobbies").value = selectedRow.cells[6].innerHTML;
        document.getElementById("email").value = selectedRow.cells[7].innerHTML;
        document.getElementById("number").value = selectedRow.cells[8].innerHTML;
        
        
        
    }
    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.fullname;
        selectedRow.cells[1].innerHTML = formData.regno;
        selectedRow.cells[2].innerHTML = formData.date;
        selectedRow.cells[3].innerHTML = formData.gender;
        selectedRow.cells[4].innerHTML = formData.place;
        selectedRow.cells[5].innerHTML = formData.percentage;
        selectedRow.cells[6].innerHTML = formData.hobbies;
        selectedRow.cells[7].innerHTML = formData.emailid;
        selectedRow.cells[8].innerHTML = formData.number;
    }
    
    function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("studentList").deleteRow(row.rowIndex);
            resetForm();
        }
    }
    function validate() {
        isValid = true;
        if (document.getElementById("fullname").value == "") {
            isValid = false;
            document.getElementById("fullnameValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("fullnameValidationError").classList.contains("hide"))
                document.getElementById("fullnameValidationError").classList.add("hide");
        }
        return isValid;
    }






    


