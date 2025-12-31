function showJohn() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("John");
      rej("Error");
    }, 1500);
  });
}

function showEd() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Ed");
      rej("Error");
    }, 2000);
  });
}

function showJane() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Jane");
      rej("Error");
    }, 500);
  });
}

showJohn()
  .then((res) => {
    console.log(res);
    return showEd();
  })
  .then((res) => {
    console.log(res);
    return showJane();
  })
  .then((res) => {
    console.log(res);
  })


async function displayName() {
  try {
    let res = await showJohn();
    console.log(res);
    res = await showEd();
    console.log(res);
    res = await showJane();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
displayName();