var i=1;
function AddData() {
    var title = document.getElementById('tit').value;
    var description = document.getElementById('des').value;
  
    if (title !== "" && description !== "") {
      var table = document.getElementById("show");
      var row = table.insertRow();
    
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);


      cell1.innerHTML = i;
      cell2.innerHTML = title;
      cell3.innerHTML = description;
      i += 1;
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', function () {
        var rowIndex = this.parentNode.parentNode.rowIndex;
        table.deleteRow(rowIndex);
      });
  
      cell4.appendChild(deleteButton);

  
      document.getElementById('bod').reset();
    }
  }
  
