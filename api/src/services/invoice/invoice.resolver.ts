import { Resolver, Query, Arg, Int, ID, Mutation } from 'type-graphql';
import { loadInvoices } from '../../data/invoice.data';
import { Invoice, AddInvoiceInput } from './invoice.types';

@Resolver()
export default class ProductResolver {
  private readonly invoiceCollection: Invoice[] = loadInvoices();

  @Query(() => [Invoice], { description: 'Get all invoice' })
  async invoices(
    @Arg('limit', () => Int, { defaultValue: 10 }) limit: number,
    @Arg('offset', () => Int, { defaultValue: 0 }) offset: number
  ): Promise<Invoice[]> {
    console.log(limit, offset);

    return await this.invoiceCollection;
  }

  @Query(() => Invoice)
  async invoice(@Arg('id', () => ID) id: string): Promise<Invoice | undefined> {
    return await this.invoiceCollection.find(item => item.id === id);
  }

  @Mutation(() => Invoice)
  async createInvoice(
    @Arg('data') newInvoiceData: AddInvoiceInput
  ): Promise<Invoice> {
    // sample implementation
    // const invoice =
    await this.invoiceCollection.push(newInvoiceData);
    console.log(newInvoiceData, 'new invoice data');

    return newInvoiceData;
  }
  @Mutation(() => Invoice)
  deleteInvoice(@Arg('id') id: string): Invoice | undefined {
    // sample implementation
    // const invoice =
    // const data = this.invoiceCollection.filter(invoice=>invoice.id !== id);
    const deletedItem = this.invoiceCollection.find(
      (invoice: Invoice) => invoice.id === id
    );
    // const itemIdx = this.invoiceCollection.findIndex(
    //   invoice => invoice.id === id
    // );
    // this.invoiceCollection.splice(itemIdx, 1);

    console.log(id, 'deleted invoice data');

    return deletedItem;
  }
}
