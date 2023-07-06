// 変数numにランダムな整数を代入する
let num = 30;

// 変数numの値を出力する
console.log(num);


if ((num %3 ===0) && (num %5 ===0)) {
  console.log('3と5の倍数です');
}

// 3の倍数は3で割り切れる
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
// 5の倍数は5で割り切れる
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

else {
  console.log(num);
}