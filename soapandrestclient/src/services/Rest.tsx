export interface IAnimal {
  id: number;
  name: string;
  description: string;
  dailySleep: number;
}

export const getAllAnimals = (): Promise<IAnimal[]> => {
  return fetch("/rest/getAllAnimals", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(res => res.json());
};

export const deleteAnimal = (id: number): Promise<Response> =>
  fetch(`/rest/deleteAnimal/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

export const addNewAnimal = (animal: IAnimal): Promise<Response> =>
  fetch(`/rest/addAnimal`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(animal)
  });

export const updateAnimal = (animal: IAnimal): Promise<Response> =>
  fetch(`/rest/updateAnimal`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(animal)
  });
