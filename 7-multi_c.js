const args = process.argv.slice(2);
const count = parseInt(args[0], 10);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else if (count > 0) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
// If count is zero or negative, print nothing (no console.log)
