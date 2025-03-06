# Portfolio

This project is a personal portfolio website designed to showcase my projects, work experience, and contact information. It features a modern design with interactive 3D elements, animations, and responsive layouts, allowing potential employers or collaborators to explore my work in an engaging and dynamic way.

## Features
- **Home Section**: Introduction with a call-to-action button that invites users to explore the site further.
- **About Section**: A section that shares information about me, my passion for coding, my location, and the technologies I'm familiar with.
- **Projects Section**:  A showcase of my selected projects, including descriptions, the technologies used, and links to live websites.
- **Work Experience Section**: Detailed work experience presented with interactive 3D animations to enhance engagement.
- **Contact Section**: A contact form that allows users to send messages directly to my email.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Three.js**: A JavaScript 3D library for creating 3D graphics in the browser.
- **GSAP**: A JavaScript library for creating high-performance animations.
- **EmailJS**: A service for sending emails directly from the client-side.
- **React-Three-Fiber**: A React renderer for Three.js.
- **React-Globe.gl**: A React component for rendering interactive globes.
- **Leva**: A GUI for tweaking React state.

## Installation Instructions
1. Clone the repository:
  ```bash
  git clone https://github.com/Msole18/12-portfolio.git
  cd 12-portfolio
  ```
2. Install the dependencies:
  ```bash
  npm install
  ```

## Running the Project Locally
1. Start the development server:
  ```bash
  npm start
  ```
2. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Dependencies
- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).
- **npm**: Node.js package manager, which comes with Node.js.

## Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

```bash
VITE_APP_EMAILJS_USERID=your_emailjs_user_id
VITE_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace `your_emailjs_user_id`, `your_emailjs_template_id`, and `your_emailjs_public_key` with your actual EmailJS credentials.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
