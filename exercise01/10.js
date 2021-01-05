let dice = [];
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 6) {
      dice = [i, j];
      console.log(dice);
    }
  }
}