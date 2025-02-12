const removeFromArray = function(array, exclude,...additionalOptions) {
    return array.filter(item => {return item !== exclude && additionalOptions.every(option => option !== item || typeof option !== typeof item)});
  
};
// First we are checking if item from array is not like exclude and this will be returned. additionaly we are checking if every additionalOption if each option doesnt match item and if its type doesnt match item)
// Robimy tak bo nie chcemy dodac przedmiotow ktore sa nam podane dlatego uzywamy !==. jak bysmy chcieli je dodac to bysmy uzywali tylko ===
// Do not edit below this line
module.exports = removeFromArray;
