const removeFromArray = function(array, ...num) {
    return array.filter((element) => {
        return !num.includes(element);
    })
};
// Do not edit below this line
module.exports = removeFromArray;


// Uzywamy filter aby odfiltrowac posczegolne elementy arraya
// odwracamy dzialanie filter poprzez zastosowanie ! gdzie sprawdzamy czy nowa tablica (...)num (nasze argumenty ktore chcemy wyrzucic) zawieraja elementy (poszczegolne elemenety arraya), jesli nie zawieraja, zwraca true, czyli element zostaje