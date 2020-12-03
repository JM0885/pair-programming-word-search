const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(l => l.join(''))
    const verticalJoin = [];
        for (let r = 0; r < letters.length; r++){
            let string = "";
        for(let columns = 0; columns <= letters[r].length; columns++){
            string += letters[columns][r];
        }
        verticalJoin.push(string);
    }
    if(horizontalJoin.includes(word) || verticalJoin.includes(word)){
        return true;
    } else {
        return false;
    }
}
module.exports = wordSearch;