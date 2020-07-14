const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do something Async'), 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.log(error)
  }
}

async function pruebaFinal() {
  console.log('Before doSomething');
  await doSomething();
  console.log('After doSomething');
  console.log('Before anotherFunction');
  await anotherFunction();
  console.log('After anotherFunction');
}

pruebaFinal();