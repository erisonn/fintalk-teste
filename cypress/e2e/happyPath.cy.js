describe("Should complete happy path", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Should render login screen correctly", () => {
    cy.visit("/login");
    cy.contains("Fin-Chat").should("be.visible");

    cy.contains("Username").should("be.visible");
    cy.contains("Must be between 6 and 16 alphanumeric characters").should(
      "be.visible"
    );

    cy.contains("Password").should("be.visible");
    cy.contains("Must be between 8 and 32 alphanumeric characters").should(
      "be.visible"
    );
    cy.contains("Continue").should("be.visible");
  });

  it("Should sign up correctly", () => {
    cy.visit("/login");
    cy.contains("Sign up").click();
    cy.get('input[name="username"]').type("CypressUser");
    cy.get('input[name="password"]').type("CypressUser1234");
    cy.contains("Create account").click();
    cy.contains("Account created sucessfully!").should("be.visible");
  });

  it("Should log in correctly", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type("CypressUser");
    cy.get('input[name="password"]').type("CypressUser1234");
    cy.contains("Continue").click();
    cy.contains("Logged in successfully!").should("be.visible");
  });

  it("Should render messages page correctly", () => {
    cy.visit("/messages");
    cy.contains("Your chats: CypressUser").should("be.visible");
    cy.contains("Log out").should("be.visible");
    cy.contains("Create chat").should("be.visible");

    cy.contains("Chat from work").should("be.visible");
    cy.contains("No chat selected").should("be.visible");
  });

  it("Should create chat correctly", () => {
    cy.visit("/messages");
    cy.contains("Create chat").click();
    cy.get('input[name="Chat name"]').type("New chat cypress");
    cy.get('input[name="Chat description"]').type(
      "New chat cypress description"
    );
    cy.contains("Create").click();
    cy.contains("New chat cypress").should("be.visible");
    cy.contains("New chat cypress description").should("be.visible");
  });

  it("Should edit chat correctly", () => {
    cy.visit("/messages");
    cy.contains("New chat cypress").click();
    cy.contains("Edit").click();
    cy.get('input[name="Chat name"]').type(" edited");
    cy.get('input[name="Chat description"]').type(" edited");
    cy.contains("Edit chat").click();
    cy.contains("New chat cypress edited").should("be.visible");
    cy.contains("New chat cypress description edited").should("be.visible");
  });

  it("Should send message correctly", () => {
    cy.visit("/messages");
    cy.contains("New chat cypress edited").click();
    cy.get('input[name="new message"]')
      .type("cypress test new message")
      .type("{enter}");
    cy.get(".ChatContent-messages")
      .contains("cypress test new message")
      .should("be.visible");
  });

  it("Should log out correctly", () => {
    cy.visit("/messages");
    cy.contains("Log out").click();
    cy.url().should("include", "/login");
  });
});
