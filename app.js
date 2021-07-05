var arr = [[255], [332, 122], [44, 129, 120], [15, 78, 93, 39], [39, 725, 13, 27, 623], [1, 412, 344, 516, 677, 20], [111, 216, 78, 850, 936, 42, 222], [12, 83, 952, 765, 555, 621, 792, 121], [29, 329, 525, 673, 3, 744, 549, 12, 25], [930, 131, 816, 719, 393, 765, 1283, 1400, 5232, 1293]];

var minArr = arr.map(function (array) {
    return Math.min.apply(null, array)
});
const sum = minArr.reduce(add, 0);

function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum);


