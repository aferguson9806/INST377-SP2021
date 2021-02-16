describe('Lab 1', () => {
<<<<<<< HEAD
  it('Successfully loads', () => {
    cy.fixture('test_values').then((json) => {
      cy.visit(`${json.test_context || ''}/lab_1/`); // change URL to match your dev URL
      cy.htmlvalidate();
=======
  it('Loads and contains entirely valid HTML', () => {
    // This blocks the very tricky livereload script which causes labs to take hours to grade
    cy.intercept('**livereload.js?snipver=1', {
      statusCode: 200,
      body: 'it worked!'
>>>>>>> e1795a97299d7518d5f76cc741f7713691f9a58f
    });
    Cypress.on('uncaught:exception', (err, runnable) => false);
    // returning false here prevents Cypress from
    // failing the test

    cy.visit('labs/lab_1/');
    cy.htmlvalidate();
  });

  it('Contains a page title with your name in it', () => {
<<<<<<< HEAD
    cy.fixture('test_values').then((json) => {
      cy.get('head title')
        .contains(json.name);
    });
  });

  it('Contains a header element with your name in it', () => {
    cy.fixture('test_values').then((json) => {
      cy.get('body h1')
        .contains(json.name);
    });
=======
    cy.get('head title')
      .then(($title) => {
        expect(Cypress.env('NAME')).to.be.a('string');
        const nameTests = Cypress.env('NAME').split(' ');
        const text = $title.text();
        const testString = nameTests.find((element) => text.includes(element));
        expect(testString).to.not.be.undefined;
      });
  });

  it('Contains a header element with your name in it', () => {
    cy.get('body h1')
      .should('be.visible')
      .and(($h1) => {
        expect(Cypress.env('NAME')).to.be.a('string');
        const nameTests = Cypress.env('NAME').split(' ');
        const text = $h1.text();
        const testString = nameTests.find((element) => text.includes(element));
        expect(testString).to.not.be.undefined;
      });
>>>>>>> e1795a97299d7518d5f76cc741f7713691f9a58f
  });

  it('Contains an unordered list with three elements', () => {
    cy.get('ul')
      .find('li')
      .should('have.length', 3);
  });

<<<<<<< HEAD
  it('Contains an adorable picture, with alt text', () => {
    cy.get('img').each(($el) => {
      cy.wrap($el)
        .should('have.attr', 'alt');
    });
  });

  it('Should have an image that fits on the page - no bigger than 480px', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => { checkImageSize($img, 481); });
=======
  it('Contains an ordered list with five elements', () => {
    cy.get('ol')
      .find('li')
      .should('have.length', 5);
  });

  it('Contains four adorable pictures', () => {
    cy.get('img')
      .should('be.visible')
      .should('have.length', 4)
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        expect($img[0].naturalWidth).to.be.lessThan(481);
      });
  });

  it('All pictures have alt text', () => {
    cy.get('img')
      .each(($el) => {
        cy.wrap($el)
          .should('have.attr', 'alt');
      });
  });

  it('Images should load correctly and be no larger than 480 pixels wide', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        expect($img[0].naturalWidth).to.be.lessThan(481);
      });
  });

  it('Contains a hard rule at the bottom of the page', () => {
    cy.get('hr');
>>>>>>> e1795a97299d7518d5f76cc741f7713691f9a58f
  });
});
