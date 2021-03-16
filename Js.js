//Заполнение матрицы
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
//вывод матрицы 
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



  var rows,columns;
  rows = 5;
  columns = 5;
  var myMatrix = matrixArray(rows,columns);//Заполнение матрицы
  var myMatrixbasic = document.getElementById('matrixBasic');
   myMatrixbasic.innerHTML= outputTablet(myMatrix,rows,columns);//Вывод матрицы
 
 
 
   // для просмотра вида
 var timeQsort = document.getElementById('timeMatrixQsort');
 var timeShella = document.getElementById('timeMatrixShella');
  //время работы 
var myMatrixQsort = document.getElementById('matrixQsort');
  var start= new Date().getTime();
  myMatrixQsort.innerHTML= outputTablet(myMatrix,rows,columns);
var end = new Date().getTime();
timeQsort.innerHTML =`<p>Время работы:`+(end - start)+`ms</p>`


//время работы 
var myMatrixShella = document.getElementById('matrixShella');  
 start= new Date().getTime();
myMatrixShella.innerHTML= outputTablet(myMatrix,rows,columns);
 end = new Date().getTime();
 timeShella.innerHTML =`<p>Время работы:`+(end - start)+`ms</p>`
  
  
  
  // конец
 
 