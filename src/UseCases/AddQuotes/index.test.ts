import faker from "faker";
import QuotesAddApiGateway from "../../Gateways/QuotesAddApiGateway";
import AddQuotes from ".";

describe("AddQuotes", () => {
  it("adds a quote", async () => {
    const mockGateway: QuotesAddApiGateway = {
      userToken: jest.fn(),
      addQuote: jest.fn(),
    };

    const gatewaySpy = jest.spyOn(mockGateway, "addQuote");
    
    const auhtor = faker.lorem.word();
    const quote = faker.lorem.sentence();

    await new AddQuotes(mockGateway).execute(auhtor, quote);

    expect(gatewaySpy).toBeCalledTimes(1);
    expect(gatewaySpy).toHaveBeenCalledWith(auhtor, quote);
  });
});