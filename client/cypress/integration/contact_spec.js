describe("Contacts", () => {
  beforeEach(() => {});
  it("Shoud Have the first page preloaded", () => {
    cy.visit("/");
    cy.get(`[data-cy='loader']`).should("be.visible");
    cy.get(`[data-cy='contact']`).should("have.length", 20);
  });

  it("Should load the next page and disable the button for the las page", () => {
    cy.visit("/");
    cy.get(`[data-cy='contact']`).should("have.length", 20);

    for (let i = 1; i < 10; i++) {
      cy.get(`[data-cy='next-page-button']`).scrollIntoView().click();
      cy.get(`[data-cy='contact']`).should("have.length", 20 + 20 * i);
    }
  });
});
