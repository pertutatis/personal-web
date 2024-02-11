import serviceHome from '../serviceHome'
import Card from '../../models/Card';
import BankAccount from '../../models/BankAccount'
import Content from '../../models/Content'

const cardComponent = {
  id: 'test',
  text: '600112233',
  title: 'John doe'
}
const cardComponentAna = {
  id: 'contact_ana',
  text: '600112233',
  title: 'John doe'
}
const contactComponent = {
  id: 'contact',
  text: 'Lorem ipsum',
  title: 'John doe'
}
const cardComponentDiego = {
  id: 'contact_diego',
  text: '600112233',
  title: 'John doe'
}
const cardBankAccount = {
  id: 'bank_account',
  text: 'Lorem ipsum',
  account: 'ESXX XXXX XX XXXXXXXXXXXXXX'
}
const emptyResponse = {
  // schedulle section
  schedule: null,
  scheduleCeremony: null,
  scheduleCocktail: null,
  scheduleParty: null,
  scheduleResopon: null,
  // How to arrive section
  howToArrive: null,
  // Bus section
  bus: null,
  busPopup: null,
  // Music form
  reservation: null,
  // Contact section
  contact: null,
  contactAna: null, 
  contactDiego: null,
  // bank closer
  bankAccount: null
}

describe('Home content service emties', () => {
  it('retrieves the data empty if there is nocontent', () => {
    const homeContent = serviceHome.getHome()

    expect(homeContent).toStrictEqual(emptyResponse);
  });

  it('retrieves the data empty if content is empty', () => {
    const homeContent = serviceHome.getHome([])

    expect(homeContent).toStrictEqual(emptyResponse);
  });

  it('retrieves the data empty if content is not well defined', () => {
    const homeContent = serviceHome.getHome([cardComponent, cardComponent])

    expect(homeContent).toStrictEqual(emptyResponse);
  });
});

describe('Home content service', () => {
  it('retrieves the data for all components', () => {
    const homeContent = serviceHome.getHome([cardComponentAna, cardComponentDiego, cardBankAccount, contactComponent])

    expect(homeContent).toStrictEqual({
      // schedulle section
      schedule: null,
      scheduleCeremony: null,
      scheduleCocktail: null,
      scheduleParty: null,
      scheduleResopon: null,
      // How to arrive section
      howToArrive: null,
      // bus section
      bus: null,
      busPopup: null,
      // Music form
      reservation: null,
      // Contact section
      contact: new Content(contactComponent),
      contactAna: new Card(cardComponentAna), 
      contactDiego: new Card(cardComponentDiego),
      // bank closer
      bankAccount: new BankAccount(cardBankAccount)
    });
  });
});
