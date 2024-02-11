import Card from '../Card';

const id = 'contact';
const title = 'John doe';
const text = '600112233';

describe('Card model', () => {
  it('retrieves the model fullfiled', () => {
    const contactCard = new Card({id, title, text});

    expect(contactCard).toMatchInlineSnapshot(`
      Card {
        "id": "contact",
        "text": "600112233",
        "title": "John doe",
      }
    `);
  });

  it('retrieves the model simplified', () => {
    const contactCard = new Card({id, title});

    expect(contactCard).toMatchInlineSnapshot(`
      Card {
        "id": "contact",
        "text": "",
        "title": "John doe",
      }
    `);
  });
});
