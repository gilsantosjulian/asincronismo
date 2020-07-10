const somethimeWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) resolve('Hey!')
    else reject('Whoooops!')
  })
}

somethimeWillHappen()
.then(response => console.log(response))
.catch(error => console.log(error))

const somethimeWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true)
      setTimeout(() => resolve('True'), 2000)
    else {
      const error = new Error('Whooooops!')
      reject(error)
    };
  });
};

somethimeWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

Promise.all([somethimeWillHappen(), somethimeWillHappen2()])
  .then((response) => {
    console.log('Array with results', response);
  })
  .catch((error) => {
    console.log(error);
  });