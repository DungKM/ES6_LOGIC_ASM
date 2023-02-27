// Object = { key: value }

const person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "50 Main st",
        number: 10,
    },
};

// const myAge = person.age;
// const myName = person.name;
// const myCity = person.city;
// const myAddress = person.address;

// console.logg(myAge, myName, myCity, myAddress);
// destructoring;
const {
    name: myName,
    age,
    city,
    address: { number },
} = person;

// console.log(address);

function showInfo({ name, age, city, address: { number } }) {
    console.log(name, age, city, number);
}
showInfo(person);

function useState(intialState) {
    let state = intialState;
    function getState() {
        return state;
    }
    function setState(newState) {
        return (state = newState);
    }
    return [getState, setState];
}
const [count, setCount] = useState(10);
console.log("count cũ", count());
setCount(30);
console.log("count mới", count());
