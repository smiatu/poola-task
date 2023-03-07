import range from "lodash/range";

type Results = {
  spaces: Space[];
};

type Space = {
  name: string;
};

const count = Math.round(1 + Math.random() * 3);

const searchSpaces = (text: string): Promise<Results> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      
      const spaces = range(count).map((index) => ({
        name: `${text} number ${index}`,
      }));

      res({ spaces });
    }, Math.round(Math.random() * 1000 * 3));
  });
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

 /**
  * 5) Invent some reusable way to limit execution of functions like searchSpaces() to an arbitrary value ie. 1000 ms
  * 6) Invent a "way" to run functions like searchSpaces() with retries on reject.
  */

export { searchSpaces };
