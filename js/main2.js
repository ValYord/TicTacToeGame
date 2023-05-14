function empties(){
const emptyCells = [];
for (let row = 0; row < array.length; row++) {
  for (let col = 0; col < array[row].length; col++) {
    if (array[row][col] === undefined) {
      emptyCells.push({ row, col });
    }
  }
}
return emptyCells;
}

function get_EMPTY(){
    let arr = empties(array);
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];

}
function computer_easy(image,i,j){
    setTimeout(() => {
        let step = check(array);
        if (step !== undefined) {
          end(step);
        }
      },0);
        if(image.getAttribute('src') !== "images/white.png"){
        
        }else{
           
            image.src = "images/x.png";
            moves+=1;
            array[i][j] = 0;
            let obj = get_EMPTY();
            let row = obj.row;
            let col = obj.col;
            array[row][col] = 1;
            const empty_image =  document.querySelector(`[row="${row}"][column="${col}"]`);
            setTimeout(() => {
                empty_image.src = "images/o.png";
                moves+=1;
              }, 1000);
 

            }
}

function computer_medium(image, i, j) {
    setTimeout(() => {
      let step = check(array);
      if (step !== undefined) {
        end(step);
      }
    }, 0);
    
    image.src = "images/x.png";
    array[i][j] = 0;
    
    // Check if the center is empty
    if (array[1][1] === undefined) {
      array[1][1] = 1;
      const center_image = document.querySelector(`[row="1"][column="1"]`);
      setTimeout(() => {
        center_image.src = "images/o.png";
      }, 1000);
    } else {
        find_block_random()
    }
  }
  

function find_block_random(){
    let arr = empties();
    for(let i = 0;i < arr.length;i++){
        let row = arr[i].row;
        let column = arr[i].column;
        array[row][column] = 1;
        let st = check(array);
        if(st !== undefined){
            let img = document.querySelector(`[row="${row}"][column="${column}"]`);
            setTimeout(() =>{
                img.src = "images/o.png";
            },1000);
            return true;
        }else{
            array[row][column] = undefined;
        }
    }
    for(let i = 0;i < arr.length;i++){
        let row = arr[i].row;
        let column = arr[i].column;
        array[row][column] = 0;
        let st = check(array);
        if(st !== undefined){
            let img = document.querySelector(`[row="${row}"][column="${column}"]`);
            setTimeout(() =>{
                img.src = "images/o.png";
            },1000);
            array[row][column] = 1;
            return true;
        }else{
            array[row][column] = undefined;
        }
    }
   { let obj = get_EMPTY();
    let row = obj.row;
    let col = obj.col;
    array[row][col] = 1;
    const empty_image = document.querySelector(`[row="${row}"][column="${col}"]`);
    setTimeout(() => {
      empty_image.src = "images/o.png";
      moves += 1;
    }, 1000);
   }
}

