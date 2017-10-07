import faker from 'faker';

export const generateCard = () => ({
  id: faker.random.number(),
  name: faker.lorem.word(),
  active: faker.random.boolean(),
  match: faker.random.boolean(),
})

export const generateDeck = () => {
  let deck = [];
  for (let i = 0; i < 16; i++){
    deck.push(generateCard());
  }
  return deck;
}
