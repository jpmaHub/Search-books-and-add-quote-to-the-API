import faker from "faker";

export function generateMockSearchBooks(totalToMake: number): any[] {
  return Array.from(Array(totalToMake).keys()).map(generateMockSearchBook);
}

function generateMockSearchBook(key: number) {
  return {
    id: key.toString(),
    authors: [
      faker.lorem.word().toString(),
      faker.lorem.word().toString()
    ],
    description: faker.lorem.sentence().toString(),
    publisher: faker.lorem.word().toString(),
    publishedDate: faker.date.recent(10).toDateString(),
    pageCount: faker.random.number().toString(),
    averageRating: faker.random.number().toString(),
    ratingsCount: faker.random.number().toString(),
    title: faker.lorem.sentence().toString(),
  };
}