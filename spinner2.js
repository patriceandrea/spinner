process.stdout.write('hello from spinner2.js... \rheyyy\n');

const symbols = [
  '\r|   ',
  '\r/   ',
  '\r|  ',
  '\r-  ',
  '\r\\   ',
  '\r|   \n'
];
let delay = 0;
for (const element of symbols) {
  delay += 500;

  setTimeout(() => { process.stdout.write(element) }, delay);
}
