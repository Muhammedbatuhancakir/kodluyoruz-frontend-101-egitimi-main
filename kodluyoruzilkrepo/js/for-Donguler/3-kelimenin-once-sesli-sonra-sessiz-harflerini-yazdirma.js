/* Method 1 */

//includes belirtilen öğenin olup olmadığını true-false şeklinde gösterir.

// var vowels = ["a", "e", "i", "o", "u"];
// function vowelsAndConsonants(s) {
//   for (var index = 0; index < s.length; index++) {
//     if (vowels.includes(s[index])) {
//       console.log(s[index]);
//     }
//   }

//   for (var index = 0; index < s.length; index++) {
//     if (!vowels.includes(s[index])) {
//       console.log(s[index]);
//     }
//   }
// }


/* Method 2 */

// (indexof(s[j]) >-1) >> indexof 1. eleman s[j] aranacak eleman 2. index değeridir.Eğer aranan bulunamazsa -1 o yüzden aşağıda -1'den büyük olsun diye bir şart koyulmuş.Bunun sayesinde sadece sesli harfleri gösterdi.0'dan küçük şartımız ise -1 yani bulunmayan elemanları göster şartı koyduk.

// var vowels = ["a", "e", "i", "o", "u"];
// function vowelsAndConsonants(s) {
//   for (var i = 0; i < s.length; i++) {
//     if (vowels.indexOf(s[i]) > -1) {
//       console.log(s[i]);
//     }
//   }

//   for (var j = 0; j < s.length; j++) {
//     if (vowels.indexOf(s[j]) < 0) {
//       console.log(s[j]);
//     }
//   }
// }


/* Method 3 */


// function vowelsAndConsonants(s) {
//   const vowels = "aeiou";
//   var consonants = "";

//   for (var i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       console.log(s[i]);
//     } else {
//       consonants += s[i] + "\n";
//     }
//   }
//   console.log(consonants.trim());
// }
