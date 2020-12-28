//JS hashtable v1


//prime finder func
const primeFinder = (number) => {

    //corner cases
    if(number <= 1){
        return false;
    }
    if(number <= 3){
        return true;
    }

    if(number%2 === 0 || number%3 === 0){
        return false;
    }

    for(let i = 5; i*i <= number; i=i+6){
        if(number%i === 0 || number%(i+2) === 0){
            return false;
        }
    }
    return true;
}
//console.log(primeFinder(5));

//next prime finder
const nextPrimeFinder = (prevTableLength) => {
    let newTableLength = prevTableLength;
    let isFound = false;

    if(prevTableLength <= 1){
        newTableLength = 2
        return newTableLength;
    }
    else{
        while(!isFound){
            prevTableLength++;
            
            if(primeFinder(prevTableLength)){
                isFound = true;
                newTableLength = prevTableLength;
            }
        }
        return newTableLength;
    }
}
//console.log(`Next Prime is: ${nextPrimeFinder(17)}`);



//hash func 
let resizeCounter = 0;
const hashStringToInt = (string, tableSize) => {
    let hash = 17; //good to start with prime numbers

    for(let i = 0; i < string.length; i++){
        hash = (13 * hash * string.charCodeAt(i)) % tableSize; //13 is arbitray picked prime num
    }
    
    return hash;
}

class HashTable {
    table = new Array(3333);

    //resizing the table for better perf
    numItems = 0;

    resize = () => {
        const newTable = new Array(nextPrimeFinder(this.table.length));

        this.table.forEach(item => {
            if(item){
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, newTable.length);

                    if(newTable[index]){
                        newTable[index].push([key, value]); //chaining, cause data can collide with each other
                    }
                    else{
                        newTable[index] = [[key, value]]; //chaining, cause data can collide with each other
                    }

                })
            }
        });
        this.table = newTable;
    }
    

    //set func
    setItem = (key, value) => {

        const loadFactor = this.numItems / this.table.length;
        

        //cehcking if loadfactor is greater than 80%
        if(loadFactor > .8){
            //resize
            this.resize();
            resizeCounter++;
            console.log(`resize called(${resizeCounter})`);
        }

        this.numItems++;
        const index = hashStringToInt(key, this.table.length);

        //checking if we have duplicate indexs
        if(this.table[index]){
            this.table[index].push([key, value]); //chaining, cause data can collide with each other
        }
        else{
            this.table[index] = [[key, value]]; //chaining, cause data can collide with each other
        }

        
    }

    //get func
    getItem = (key) => {
        const index = hashStringToInt(key, this.table.length);

        //error checking
        if(!this.table[index]){
            return null;
        }

        return this.table[index].find(x => x[0] === key)[1]; //returns the value which matches our key say : firstName, [0]: key ; [1]: value
    }
}




module.exports = HashTable;