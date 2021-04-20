const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface PlayerInterface<T> {
  name: string;
  data: T;
}

const player: PlayerInterface<{ meta: string }> = {
  name: 'Jack',
  data: {
    meta: 'foo',
  },
};

const player2: PlayerInterface<string[]> = {
  name: 'John',
  data: ['foo', 'bar', 'bax'],
};

// const result = addId<PlayerInterface>(player);
// const result2 = addId<string>('hi');
