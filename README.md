# Lipila-ui

## Overview

Lipila-ui provides a user-friendly interface for sending money using mobile money. Key features include:

- **Streamlined payment form:** Collects payment details efficiently in 1 step.
- **Intuitive interactions:** Simple form fields guide users through the process.
- **Confirmation and security:** Ensures payment details are accurate and secure.

## Components

- **ParentComponent:** Orchestrates overall UI behavior and navigation.
- **InformationEntryFields:** Renders fields for payment details (amount, recipient, account numbers).
- **PaymentForm:** Encapsulates the multi-step payment form and submission logic.
- **Confirmation:** Displays payment summary and prompts for PIN confirmation.

## Navigation

Users navigate through the payment process sequentially:

1. InformationEntryFields
2. Confirmation (after form submission)

## User Interactions

- Fill in required form fields.
- Navigate between steps using buttons.
- Confirm payment with PIN on user phone.

## Styling

- Clean and minimalist design for clarity and ease of use.
- Branding guidelines to be determined.

## Usage

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Access UI in browser: `http://localhost:3000` (or specified port)

## Development

- Built with React and axios.
- Follow React best practices for component structure and state management.
- Utilize axios for API interactions (payment submission).

## Contribution

1. Fork the repository.
2. Create a new branch for your changes.
3. Make changes and commit them.
4. Submit a pull request.

## Additional Information

- Design mockups/screenshots to be added.
- Accessibility considerations in progress.
- Cross-browser compatibility testing planned.
