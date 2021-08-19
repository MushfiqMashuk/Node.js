const t = Date.now();
const hungry = true;

const promise = new Promise((resolve, reject) => {
  if (hungry) {
    setTimeout(()=>{
      const food = {
        main: "kacchi",
        drinks: ["borhani", "coke"],
        dessert: "firni",
        tea: "malai cha",
      };
      resolve(food);
      console.log(
        `From 'promise' block ${Date.now() - t} milliseconds have passed`
      );
    }, 5000);
  } else reject(new Error("I am not hungry!"));
});

const secondPromise = (food) => {
  const message = `I'll eat ${food.main} with ${food.drinks[0]} and ${food.drinks[1]} along with dessert item ${food.dessert} and ${food.tea}`;
  return Promise.resolve(message);
};

console.log(typeof Promise);

promise
  .then(secondPromise)
  .then((res) => {
    console.log(res);
    console.log(`From 'then' block ${Date.now() - t} milliseconds have passed`);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("Hello");
console.log(`${Date.now() - t} milliseconds have passed`);
