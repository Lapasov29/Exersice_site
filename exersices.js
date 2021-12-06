let obj = {
    ex1: {
        shart: 'Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.',
        example: ['arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]',
        'arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]',
        'arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]'],
        test: [
            [[7, 5], [7, 14, 21, 28, 35]],
            [[12, 10], [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]],
            [[17, 6],  [17, 34, 51, 68, 85, 102]],
            [[630, 14], [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820]],
            [[140, 3], [140, 280, 420]],
            [[7, 8], [7, 14, 21, 28, 35, 42, 49, 56]],
            [[11, 21],  [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231]]
        ],
        default: 'function arrayOfMultiples (num, length) {  }'
    },
    ex2: {
        shart: 'Create a function that will return an integer number corresponding to the amount of digits in the given integer num.',
        example: [
            'num_of_digits(1000) ➞ 4',
            'num_of_digits(12) ➞ 2',
            'num_of_digits(1305981031) ➞ 10',
            'num_of_digits(0) ➞ 1]'],
        test: [
            [10000 ,5],
            [1 ,1],
            [12345678 ,8],
            [34 ,2],
            [56 ,2],
            [6534 ,4],
            [692 ,3],
            [4376981457 ,10],
            [8956754289 ,10],
            [1406591396 ,10]
        ],
        default: 'function num_of_digits(num) {  }'
    },
    ex3: {
        shart: 'A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it\'s a repdigit or not.',
        example: [
            'isRepdigit(66) ➞ true',
            'isRepdigit(0) ➞ true',
            'isRepdigit(-11) ➞ false'
        ],
        test: [
                [66, true],
                [0, true],
                [-11, false],
                [13, false],
                [-4, false],
                [33, true],
                [55, true]
        ],
        default: 'function isRepdigit(num) {  }'
    },
    
}