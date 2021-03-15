function matrixArray(rows,columns){
    var arr = new Array();
    for(var i=0; i<rows; i++){
      arr[i] = new Array();
      for(var j=0; j<columns; j++){
        arr[i][j] = Math.floor(Math.random() * (51 - 1) + 1);//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
      }
    }
    return arr;
  }

  function outputTablet (myMatrix,rows,columns){
var table = "";
for(var i=0; i<rows; i++){
    table +=`<tr>`;
    for(var j=0; j<columns; j++){
        table+=`<td>`+myMatrix[i][j]+`</td>`;
    }
    table +=`</tr>`;
  }

  return table;

  }

  var myMatrix = matrixArray(5,5);
  var myMatrixbasic = document.getElementById('matrixBasic');
  myMatrixbasic.innerHTML= outputTablet(myMatrix,5,5);
  console.log(myMatrix);