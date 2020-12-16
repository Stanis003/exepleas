let schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Lee" },
  { name: "Wakefield" }
]
let updatedSchools = editName("Stratford", "HB Woodlawn", schools)
console.log(updatedSchools[1]) // { name: "HB Woodlawn" }
console.log(schools[1]) // { name: "Stratford"


const userLogs = userName => message =>
console.log(`${userName} -> ${message}`)
const log = userLogs("grandpa23")
log("attempted to load 20 fake members")
getFakeMembers(20).then(
members => log(`successfully loaded ${members.length} members`),
error => log("encountered an error loading members")
)