let a = '#',
    b = ' '

function chess(h, w) {
    let fString = '',
        sString = ''
    for (let i = 0; i < w; i++) {
        if (i % 2 == 0) {
            fString += a
        } else {
            fString += b
        }
    }
    for (let i = 0; i < w; i++) {
        if (i % 2 == 0) {
            sString += b
        } else {
            sString += a
        }
    }
    for (let i = 0; i < h; i++) {
        if (i % 2 == 0) {
            console.log(fString)
        } else {
            console.log(sString)
        }
    }
}
chess(16, 100)

// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FuzzBuzz')
//     } else if (i % 3 == 0) {
//         console.log('Fuzz')
//     } else if (i % 3 != 0 && i % 5 == 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

// if (numberOfFilms < 10) alert('Просмотрено довольно мало фильмов')
// else if (numberOfFilms > 10 && numberOfFilms < 30)
//     alert('Вы классический любитель фильмов')
// else if (numberOfFilms > 30) alert('Вы настоящий киноман')

// const rating = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }

// for (let i = 0; i < 2; i++) {
//     let name = prompt('Какой фильм вы смотрели в посмледний раз?')
//     if (name.length <= 0 || name.length > 50) {
//         i--
//         continue
//     }
//     rating.movies[name] = +prompt('Как вы его оцените?')
// }

// console.log(rating)

// function isEven(a) {
//     let z = a
//     if (z > 0) {
//         while (z > 1) {
//             z -= 2
//         }
//         isEvenIf(z, a)
//     } else {
//         while (z < 0) {
//             z += 2
//         }
//         isEvenIf(z, a)
//     }
// }
// function isEvenIf(z, a) {
//     if (z == 0) console.log(a + ' четное')
//     else if (z == 1) console.log(a + ' нечетное')
// }

// isEven(-101)

// function countBs(a) {
//     let strng = a
//     let count = 0
//     for (let i = 0; i <= strng.length; i++) {
//         if (strng.charAt(i).toLowerCase() == 'b') count++
//     }
//     console.log(count)
// }
// countBs('abcbBbbb')

// function countChar(a, b) {
//     let sbl = b
//     let strng = a
//     let count = 0
//     for (let i = 0; i <= strng.length; i++) {
//         if (strng.charAt(i).toLowerCase() == sbl.toLowerCase()) count++
//     }
//     console.log(count)
// }

// countChar('abcCc', 'A')
