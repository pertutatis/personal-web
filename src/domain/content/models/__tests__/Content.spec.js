import Content from '../Content';

const id = 'contact';
const title = 'John doe';
const text = 'Lorem ipsum';
const link_url = '#'
const link_text = 'link'

describe('Content model', () => {
  it('retrieves the model fullfiled', () => {
    const contentComponent = new Content({id, title, text, link_url, link_text});

    expect(contentComponent).toMatchInlineSnapshot(`
      Content {
        "id": "contact",
        "link_text": "link",
        "link_url": "#",
        "text": "Lorem ipsum",
        "title": "John doe",
      }
    `);
  });

  it('retrieves the model simplified', () => {
    const contentComponent = new Content({id, title, text});

    expect(contentComponent).toMatchInlineSnapshot(`
      Content {
        "id": "contact",
        "link_text": "",
        "link_url": "",
        "text": "Lorem ipsum",
        "title": "John doe",
      }
    `);
  });
});
