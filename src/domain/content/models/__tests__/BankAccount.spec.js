import BankAccount from '../BankAccount';

const id = 'contact';
const account = 'ESXX XXXX XX XXXXXXXXXXXXXX';
const text = 'Lorem Ipsum';

describe("Bank account model", () => {
  it("retrieves the model fullfiled", () => {
    const bankComponent = new BankAccount({ id, account, text });

    expect(bankComponent).toMatchInlineSnapshot(`
      BankAccount {
        "account": "ESXX XXXX XX XXXXXXXXXXXXXX",
        "id": "contact",
        "text": "Lorem Ipsum",
      }
    `);
  });
});
