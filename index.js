//Destructurisation
var sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
}
var { bread, meat } = sandwich
console.log(bread, meat)

var regularPerson = {
  firstName: "Nick",
  lastname: "Willson"
}
var lordify = ({ firstName }) => {
  console.log(`${firstName} of Canterbuy`)
}
lordify(regularPerson)



//(...)join arrays
var peaks = ["Tara", "Stas", "Sara"]
var canyas = ["Mersede", "Josh"]
var tahoe = [...peaks, ...canyas]
console.log(tahoe.join(', '))

var [last] = peaks.reverse()
console.log(last)

var [first, ...rest] = peaks
console.log(rest.join(", "))

function directions(...args) {
  var [start, ...remaining] = args
  var [finish, ...stops] = remaining.reverse()
  console.log(`drive through ${args.length} towns`)
  console.log(`start in ${start}`)
  console.log(`the destination is ${finish}`)
  console.log(`stopping ${stops.length} times in between`)
}
directions(
  "Truckee",
  "Tahoe City",
  "Sunnyside",
  "Homewood",
  "Tahoma"
)

var morning = {
  breakfast: "oatmel",
  lunch: "peanut butter"
}
var dinner = "mac and chees"
var backpackimgMeals = {
  ...morning,
  dinner
}
console.log(backpackimgMeals)


const countdown = (value, fn) => {
  fn(value)
  return (value > 0) ? countdown(value - 1, fn) : value
}
countdown(10, value => console.log(value));

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".")
  return (remaining.length) ?
    deepPick(remaining.join("."), object[first]) :
    object[first]
}

var dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon"
      }
    }
  }
}
deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"