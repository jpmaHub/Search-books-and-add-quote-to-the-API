import QuotesAddApiGateway from "../../Gateways/QuotesAddApiGateway";

export default class AddQuotes {
  private readonly gateway: QuotesAddApiGateway;

  constructor(gateway: QuotesAddApiGateway) {
    this.gateway = gateway;
  }

  public async execute(author: string, quote: string) {
    await this.gateway.addQuote(author, quote);
  }
}