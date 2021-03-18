//Заполнение матрицы
function matrixArray(rows, columns) {
  var arr = new Array();
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array();
    for (var j = 0; j < columns; j++) {
      arr[i][j] = Math.floor(Math.random() * (51 - 1) + 1); //вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}
//вывод матрицы 
function outputTablet(myMatrix, rows, columns) {
  var table = "";
  for (var i = 0; i < rows; i++) {
    table += `<tr>`;
    for (var j = 0; j < columns; j++) {
      table += `<td>` + myMatrix[i][j] + `</td>`;
    }
    table += `</tr>`;
  }

  return table;

}


//quickSort
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
//position quicksort
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}
//quickSort  swap
function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


// Shell
function shellSort(arr) {
  const l = arr.length;
  let gap = Math.floor(l / 2);
  while (gap >= 1) {
    for (let i = gap; i < l; i++) {
      const current = arr[i];
      let j = i;
      while (j > 0 && arr[j - gap] > current) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};


//Заполнение матрицы
var rows, columns;
rows = 5;
columns = 5;
var myMatrix = matrixArray(rows, columns);
var myMatrixbasic = document.getElementById('matrixBasic');
myMatrixbasic.innerHTML = outputTablet(myMatrix, rows, columns); //Вывод матрицы


// output time 
var timeQsort = document.getElementById('timeMatrixQsort');
var timeShella = document.getElementById('timeMatrixShella');
var timeStandart = document.getElementById('timeMatrixStandart');


// quicksort time, work, output;
var myMatrixQsort = document.getElementById('matrixQsort'); ///quicksort - для вывода 
var myQsort = '';
myQsort = JSON.parse(JSON.stringify(myMatrix)); // new array copy;
var start = new Date().getTime();
for (var i = 0; i < 10000; i++)
  for (var k = 0; k < rows; k++) {

    myQsort[k] = quickSort(myQsort[k], 0, columns - 1);
  }
var end = new Date().getTime();

myMatrixQsort.innerHTML = outputTablet(myQsort, rows, columns); //quickSort -output
timeQsort.innerHTML = `<p>Время работы:` + (end - start) / 10000 + `ms</p>`



//Shell time, work,output;
var myMatrixShella = document.getElementById('matrixShella'); //Shella - для вывода 
var myShell = '';
myShell = JSON.parse(JSON.stringify(myMatrix)); // new array copy;
start = new Date().getTime();
for (var i = 0; i < 10000; i++) 
  for (var k = 0; k < rows; k++) {
    myShell[k] = shellSort(myShell[k], 0, columns - 1);
  }
end = new Date().getTime();
myMatrixShella.innerHTML = outputTablet(myShell, rows, columns);
timeShella.innerHTML = `<p>Время работы:` + (end - start) / 10000 + `ms</p>`


//Standart sort
var myMatrixStandart = document.getElementById('matrixStandart'); //Shella - для вывода 
var myStandart = '';
myStandart = JSON.parse(JSON.stringify(myMatrix)); // new array copy;
start = new Date().getTime();
for (var i = 0; i < 10000; i++) 
for (var k = 0; k < rows; k++) {
  myStandart[k].sort();
}
end = new Date().getTime();
myMatrixStandart.innerHTML = outputTablet(myStandart, rows, columns);
timeStandart.innerHTML = `<p>Время работы:` + (end - start)/10000 + `ms</p>`