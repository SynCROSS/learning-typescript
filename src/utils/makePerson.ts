export const makePerson = (name: string, age: number) => ({ name, age });
export const testMakePerson = () => {
  const person = makePerson('SynCROSS', 19);
  console.log(
    `file: makePerson.ts ~ line 4 ~ testMakePerson ~ person ${JSON.parse(
      JSON.stringify(person)
    )}`
  );
};
