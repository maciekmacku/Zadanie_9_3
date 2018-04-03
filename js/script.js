// zad 9.3
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased); //sprawdzam skrypt
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textCharsAfter); // sprawdzam .. :) 
var halfText = textCharsAfter.length/2;
console.log(halfText);
var dinosaurFinalText = textCharsAfter.substr(0, halfText);
console.log(dinosaurFinalText);






//charAt() Funkcja zwraca znak, który znajduje się na określonej pozycji w ciągu znaków (stringu). Aby sprawdzić, jaka litera znajduje się na danym miejscu, należy wskazać jej indeks jako parametr.
var txt ='Example';

console.log( txt.charAt(4) );

//indexOf() Ta metoda zwraca położenie określonej litery lub ciągu znaków (podobnie jak w tablicach). Zwracana wartość to pierwsze napotkane wystąpienie danego ciągu.
var txt = 'Lorem ipsum dolor sit amet';
var indexDolor = txt.indexOf('dolor');

if (indexDolor == -1) {
  console.log('Dolor does not appear in the txt');
} else {
  console.log(txt[indexDolor]);
}

//slice() Ta metoda zwraca kawałek tekstu z napisu. Jako parametr przyjmuje indeks początkowy oraz końcowy znaków napisu. Wynikiem jest zakres znaków napisu wskazany przez parametry.
var motto = 'Good friends are loyal people';
var partOfMotto = motto.slice(5,11); // Wartością 'partOfMotto' będą znaki (jak w tablicach pierwszy znak ma indeks '0') od 5 włącznie, do 11, ale bez znaku o indeksie 11.
console.log(partOfMotto);


//substr() Jest to funkcja podobna do metody slice, z tym, że drugi parametr zamiast indeksu ostatniego znaku przyjmuje liczbę następujących znaków napisu.

var motto = 'The rest is silence';
var mottoCharsAfter = motto.substr(12, 7); //Zwrócona wartość to 7 znaków, poczynając od indeksu 12, zatem logowaną wartością jest 'silence'.
console.log(mottoCharsAfter);

//replace() Metoda replace służy do zastępowania ciągu znaków innym ciągiem znaków. Przyjmuje zatem dwa parametry - co zamienić i na co zamienić.
var motto = 'Never give up on what you really want to do';
var mottoCharsAfter = motto.replace('do', 'have');
console.log(mottoCharsAfter);

//toUpperCase() 
var name = 'John Doe';
var nameUpperCased = name.toUpperCase();
console.log(nameUpperCased);  // -> JOHN DOE
//toLowerCase()
var text = 'BeTTer lATe THAN neveR';

if ( text.toLowerCase().indexOf('late') != -1 ) {
    console.log('Sentence contains word - late')
} //Ze względu na wielkość znaków, lATe jest czymś innym niż late. Dzięki zastosowaniu funkcji lowercase możemy sprawdzić, czy w tekście znajduje się dane słowo. W tym celu dodatkowo wykorzystujemy funkcję 'indexOf', która była omówiona wcześniej.Wartość '-1' zostanie przez nią zwrócona tylko w przypadku, kiedy słowa 'late' nie będzie w tekście. Każda inna wartość będzie wskazywać na miejsce, w którym szukany wyraz się zaczyna.

//split() Metoda służy do zamiany ciągu znaków na tablicę - należy tutaj podać znak, według którego podział nastąpi. Nie musi być to podział na pojedyncze litery, ale na przykład na słowa.
var keywords = 'red, green, blue, yellow, pink, orange, white';
var keywordsArray = keywords.split(', ');
keywordsArray.map( function(element) {
console.log('#tag-' + element);
} );


