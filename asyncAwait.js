
const hungry = true;
const promise = new Promise((resolve, reject) => {
  if (hungry) {
    setTimeout(() => {
      const food = {
        main: "kacchi",
        drinks: ["borhani", "coke"],
        dessert: "firni",
        tea: "malai cha",
      };
      resolve(food);
    }, 1000);
  } else reject(new Error("I am not hungry!"));
});

const newPromise = Promise.resolve('Universe is Expanding');


const secondPromise = (food) => {
  const message = `I'll eat ${food.main} with ${food.drinks[0]} and ${food.drinks[1]} along with dessert item ${food.dessert} and ${food.tea}`;
  return Promise.resolve(message);
};


async function myFunc(){
    try{
        const food = await promise;
        const universe = await newPromise;
        const message = await secondPromise(food);
        console.log(message);
        console.log(universe);
    }
    catch(err){
        console.log(err.message);
    }
}

myFunc();
console.log('Hello World!');

