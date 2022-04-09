const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
/* Attempt 1
const capitalizer = (word) => {
  const capitalizedWord = word.slice(0,1).toUpperCase() + word.slice(1)
  return capitalizedWord
}

const titleCased = () => {
      for (let i = 0; i < tutorials.length; i++) {
        let slicedUpTitle = tutorials[i].split(" ") //splits into an array of substrings
        slicedUpTitle = slicedUpTitle.map((word) => capitalizer(word)) //Capitalizes the first letter in the word
        let rejoinedTitle = "" //Creates empty string to add words back into
        for (let i = 0; i < slicedUpTitle.length; i++) {
          rejoinedTitle += slicedUpTitle[i]+ " "
        }
        rejoinedTitle = rejoinedTitle.slice(0,-1)
        tutorials[i] = (rejoinedTitle);
      }
      return(tutorials)
}
for of can be replaced with for loop//for (let i = 0; i < slicedTitle.length; i++) {rejoinedTitle += slicedTitle[i]+ " "}
*/

const titleCased = () => {
  return tutorials.map (title => {
  const slicedTitle = title.split(" ").map((word) => word.slice(0,1).toUpperCase() + word.slice(1))
  let rejoinedTitle = ""
  for (const word of slicedTitle) {rejoinedTitle += word + " "}
  return rejoinedTitle.slice(0,-1)
  })
}