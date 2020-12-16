const countdown = (value, fn) => {
fn(value)
return (value > 0) ? countdown(value-1, fn) : value
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