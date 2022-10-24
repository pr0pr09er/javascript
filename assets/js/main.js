// let name = prompt('Как вас зовут', '');
// alert(`Вас зовут ${name}!`);

// let a = 1, b = 1;
// let c = ++a; // a = 2 c = 2
// let d = b++; // b = 2 d = 1

// let a = 2;
// let x = 1 + (a *= 2); // a = 4 x = 5

// " " + 1 + 0 // "1"
// " " - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // "-9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// let a = prompt("Первое число", 1);
// let b = prompt("Второе число", 2);
// alert(+a + +b);

// let num = 3;
// alert(num);

// let a = 10;
// let b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);

// let c = 15;
// let d = 2;
// let result = c + d;
// alert(result);

// let a = 10;
// let b = 2;
// let c = 5;
// alert(a + b + c);

// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result);

// let str = "Привет, Мир!";
// alert(str);

// let str1 = 'Hello, ';
// let str2 = 'World!';
// alert(str1 + str2);

// let name = "Kirill";
// alert(`Hello, ${name}!`);

// let age = 16;
// alert(`You are ${age} years old!`);

// name = prompt('What is your name?', '');
// alert(`Your name is ${name}!`);

// let str = "abcde";
// alert(str.slice(0, 1));
// alert(str.slice(2, 3));
// alert(str.slice(4));

// let num = '12345';
// let result = 0;
// length = num.length;
// for (i = 0; i < num.length; i++) {
//     result += +num[i]
// }
// alert(result);

// let secondsInHour = 60 * 60;
// let secondsInDay = secondsInHour * 24;
// let secondsInMonth = secondsInDay * 30;
// alert(secondsInHour);
// alert(secondsInDay);
// alert(secondsI

// let date = new Date();
// let arr = [date.getHours(), date.getMinutes(), date.getSeconds()];
// alert(`${arr[0]}:${arr[1]}:${arr[2]}`);

// let num = prompt("Enter the number", "");
// alert(num ** 2);

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// var num = 10;
// num++;
// num++;
// num--;
// alert(num);

// let num = prompt("Enter the number", "");
// num == 10 ? alert("Correct") : alert("Incorrect");

// let min = prompt("Enter the number.", "");
// (min >= 0 && min <= 15) ? alert("in the first quarter of hour.") : 
//     (min > 15 && min <= 30) ? alert("in the second quarter of hour.") :
//     (min > 30 && min <= 45) ? alert("in the third quarter of hour.") :
//     (min > 45 && min <= 59) ? alert("in the fourth quarter of hour.") :
//     alert("Incorrect number.");

// let lang = prompt("Enter the language", "");
// if (lang == "en") { 
//     arr = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."];
//     alert(arr);
// }
// else if (lang == "ru") {
//     arr = ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."];
//     alert(arr);
// }

// switch(lang) {
//     case "en":
//         arr = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."];
//         alert(arr);
//         break;    
//     case "ru":
//         arr = ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."];
//         alert(arr);
//         break;
// }

// let languages = [["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."],
//                  ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."]];
// if (lang == "ru") {
//     alert(languages[0]);
// }                 
// else {
//     alert(languages[1]);
// }

// let a = prompt("Enter the number", "");
// (a == 0) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a > 0) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a < 0) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a >= 0) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a <= 0) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a != 0) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the word", "");
// (a == "test") ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a === "1") ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a > 0 && a < 5) ? alert("Correct") : alert("Incorrect");

// let a = prompt("Enter the number", "");
// (a == 0 || a == 2) ? alert(+a + 7) : alert(+a / 10);

// let a = prompt("Enter the number", "");
// let b = prompt("Enter the number", "");
// (a <= 1 && b >= 3) ? alert(+a + +b) : alert(+a - +b);

// let a = prompt("Enter the number", "");
// let b = prompt("Enter the number", "");
// ((2 < a && a < 11) || (6 <= b && b < 14)) ? alert("Correct") : alert("Incorrect");

// let num = prompt("Enter the number", "");
// switch(num) {
//     case '1':
//         alert("Winter");
//         break;
//     case '2':
//         alert("Spring");
//         break;
//     case '3':
//         alert("Summer");
//         break; 
//     case '4':
//         alert("Autumn");
//         break;          
// }

// let day = prompt("Enter the number", "");
// if (day > 0 && day < 11)
// {
//     alert("Число выпадает на первую декаду месяца");
// }
//     else if (day > 10 && day < 21)
// {
//     alert("Число выпадает на вторую декаду месяца");
// }
// else {
//     alert("Число выпадает на третью декаду месяца");
// }

// let month = prompt("Enter the number", "");
// if (month >= 1 && month < 3) {
//     alert('It is winter now.');
// } else if (month >= 3 && month < 6) {
//     alert('It is spring now.')
// } else if (month >= 6 && month < 9) {
//     alert('It is summer now.')
// } else if (month >= 9 && month <= 11) {
//     alert('It is fall now.');
// } else if (month === 12) {
//     alert('It is winter now.');
// } else {
//     alert('Error!');
// }

// let str = prompt("Enter the string", "");
// (str[0] === 'a') ? alert('Yes!') : alert('No.');

// let num = prompt("Enter the number", "");
// ([1, 2, 3].includes(+num[0])) ? alert('Yes!') : alert('No.');

// let num = prompt("Enter the number", "");
// alert(+num[0] + +num[1] + +num[2]);

// let num = prompt("Enter the number", "");
// (+num[0] + +num[1] + +num[2] == +num[3] + +num[4] + +num[5]) ? alert('Yes!') : alert('No.');
