const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Check if num is a valid integer (not NaN)
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
