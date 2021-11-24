describe('ui test of happy path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('happy path', () => {
    const name = "test";
    const email = "test@test.com";
    const password = "testtest";
    const confirm = "testtest";

    // open the user menu
    cy.get('button[name=menu]')
      .click();
    
    // open the register page
    cy.get('button[name=register]')
      .click();
    
    // enter name for register
    cy.get('#Name')
      .focus()
      .type(name);

    // enter email for register
    cy.get('#Email')
      .focus()
      .type(email);
    
    // enter password for register
    cy.get('#Password')
      .focus()
      .type(password);
    
    // confirm password for register
    cy.get('#ConfirmPassword')
      .focus()
      .type(confirm);
    
    // click on register
    cy.get('[name=register]')
      .click();

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // open the user menu
    cy.get('button[name=menu]')
      .click();
    
    // go to create listing page
    cy.get('[name=createListing]')
      .click();

    // enter listing title
    cy.get('[name=title]')
      .focus()
      .type('test');
    
    // enter next section
    cy.get('[name=next]')
      .click();
    
    // enter address information
    cy.get('#Street')
      .focus()
      .type('1 Kensington Street');

    cy.get('#City')
      .focus()
      .type('Sydney');

    cy.get('#State')
      .focus()
      .type('NSW');

    cy.get('#Postcode')
      .focus()
      .type('2032');

    cy.get('#countrySelect')
      .click()
    
    cy.get('[data-value=Australia]')
      .click()

    // enter next section
    cy.get('[name=next]')
      .click();

    // select property type
    cy.get('[name=house]')
      .click();
    
    cy.get('[name=entire')
      .click();
    
    // enter next section
    cy.get('[name=next]')
      .click();

    // set no. bedrooms
    cy.get('[name=bedroomAdd]')
      .click();

    // set no. beds
    cy.get('[name=bedAdd]')
      .click();

    // set no. bathrooms
    cy.get('[name=bathroomAdd]')
      .click();

    cy.get('[name=bedroom1]')
      .click();
    
    cy.get('[name=bedroom1_singleAdd]')
      .click();

    // enter next section
    cy.get('[name=next]')
      .click();

    // select amenities
    cy.get('[name=wifi]')
      .click();

    cy.get('[name=tv]')
      .click();

    cy.get('[name=cooking]')
      .click();
    
    cy.get('[name=daily]')
      .click();
    
    // enter next section
    cy.get('[name=next]')
      .click();
    
    // upload cover thumbnail
    cy.get('[name=coverAdd]').attachFile('test.jpg', { force: true })

    // wait until the thumbnail is loaded
    cy.wait(2000);

    // enter next section
    cy.get('[name=next]')
      .click();
    
    // enter price
    cy.get('[name=price]')
      .focus()
      .type('123');
    
    // submit new listing
    cy.get('[name=submit]')
      .click();
    
    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // go to edit page
    cy.get('[name=edit]')
      .first()
      .click();

    // change title
    cy.get('[name=title]')
      .focus()
      .clear()
      .type('test2')

    // enter next step until get to thumbnail page
    cy.get('[name=next]')
      .click();

    cy.get('[name=next]')
      .click();

    cy.get('[name=next]')
      .click();

    cy.get('[name=next]')
      .click();

    cy.get('[name=next]')
      .click();

    // change cover thumbnail
    cy.get('[name=coverAdd]').attachFile('test2.jpg', { force: true })

    // update current listing
    cy.get('[name=update]')
      .click();

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // publish listing
    cy.get('[name=publish]')
      .first()
      .click();

    // add availability
    cy.get('[name=availabilityAdd]')
      .click();
    
    // enter start date
    cy.get('[name=from0]')
      .focus()
      .type('2021-11-01');

    // enter end date
    cy.get('[name=to0]')
      .focus()
      .type('2021-11-06');

    // publish listing with given availability
    cy.get('[name=submit]')
      .click()

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // unpublish listing
    cy.get('[name=unpublish]')
      .first()
      .click();

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // republish a listing for another ui test of booking
    // publish listing
    cy.get('[name=publish]')
      .first()
      .click();

    // add availability
    cy.get('[name=availabilityAdd]')
      .click();
    
    // enter start date
    cy.get('[name=from0]')
      .focus()
      .type('2021-11-01');

    // enter end date
    cy.get('[name=to0]')
      .focus()
      .type('2021-11-06');

    // publish listing with given availability
    cy.get('[name=submit]')
      .click()

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // open the user menu
    cy.get('button[name=menu]')
      .click();

    // logout
    cy.get('[name=logout]')
      .click();
    
    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // open the user menu
    cy.get('button[name=menu]')
      .click();
    
    // open the user menu
    cy.get('button[name=login]')
      .click();

    // login with email
    cy.get('#Email')
      .focus()
      .type(email);

    // login with password
    cy.get('#Password')
      .focus()
      .type(password);

    cy.get('[name=login]')
      .click();

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })
  })

  // as a user cannot book his/her booking
  // using another test to test booking
  it('booking', () => {
    const name = "book";
    const email = "book@book.com";
    const password = "bookbook";
    const confirm = "bookbook";

    // open the user menu
    cy.get('button[name=menu]')
      .click();
    
    // open the register page
    cy.get('button[name=register]')
      .click();
    
    // enter name for register
    cy.get('#Name')
      .focus()
      .type(name);

    // enter email for register
    cy.get('#Email')
      .focus()
      .type(email);
    
    // enter password for register
    cy.get('#Password')
      .focus()
      .type(password);
    
    // confirm password for register
    cy.get('#ConfirmPassword')
      .focus()
      .type(confirm);
    
    // click on register
    cy.get('[name=register]')
      .click();

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })

    // select first listing
    cy.get('[id^=listing]')
      .first()
      .click();

    // go to booking pop up
    cy.get('[name=booking')
      .click();

    // select date
    cy.get('[name=from]')
      .focus()
      .type('2021-11-02');

    cy.get('[name=to]')
      .focus()
      .type('2021-11-05');

    // submit booking
    cy.get('[name=submit]')
      .click();

    // expect successful message
    cy.get('[name=close]').then(e => {
      expect(e.length).to.exist;
      cy.get('[name=close]').click();
    })
  })
})