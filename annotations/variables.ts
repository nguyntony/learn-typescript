// we are assign a specific type to apples, you cannot reassign the type afterwards
let apples: number = 5;
let fruits: string[] = ['apples', 'pears'];

const coordinates: { x: number; y: number } = {
  x: 2,
  y: 6,
};

const logNum: (i: number) => void = (i: number) => {
  console.log(i);
};
