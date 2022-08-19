let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

const destructivelyRemoveLastCat = () => {
  return cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  return cats.shift();
};

function appendCat(name) {
  const newArr = [...cats, name];
  return newArr;
}

function prependCat(name) {
  const newArr = [name, ...cats];
  return newArr;
}

function removeLastCat(newArr = [...cats]) {
  newArr.pop();
  return newArr;
}

function removeFirstCat(newArr = [...cats]) {
  newArr.shift();
  return newArr;
}
