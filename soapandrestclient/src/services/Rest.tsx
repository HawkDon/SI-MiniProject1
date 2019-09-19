export interface IAnimal {
  id: number;
  name: string;
  description: string;
  dailySleep: number;
}

export const fetchAllAnimals = (): Promise<IAnimal[]> => {
  return fetch("/rest/getAllAnimals", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(res => res.json());
};
