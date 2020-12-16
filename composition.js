const both = compose(
  civilianHours,
  appendAMPM
)
both(new Date())


const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )