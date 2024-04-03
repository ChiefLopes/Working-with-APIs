export const fakeAPI = "https://jsonplaceholder.typicode.com/todos"

export const fetchDog = () => () =>
  fetch("https://random.dog/woof.json").then((res) => res.json());