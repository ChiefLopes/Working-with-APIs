export const fakeAPI = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())

export const fetchDog = () => () =>
    fetch("https://random.dog/woof.json").then((res) => res.json());
  

    