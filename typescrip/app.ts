type Admin = {
  name: string
}

const fetchedUserData = {
  id: "u1",
  name: 'Max',
  job: {title: "CEO"}
}

console.log(fetchedUserData?.job.title)

const names: Array<string> = [];
console.log(names[0])