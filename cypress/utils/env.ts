export const env = {
  get email(): string {
    return Cypress.env('email');
  },
  get password(): string {
    return Cypress.env('password');
  }
};