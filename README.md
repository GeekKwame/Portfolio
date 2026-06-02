# Edmund Blessing — Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. Showcasing projects, experience, skills, and contact information with beautiful animations and interactive elements.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations and professional styling
- **Interactive Animations**: Scroll-triggered animations, typing effects, and hover interactions
- **Portfolio Showcase**: Beautiful project cards with detailed descriptions, tags, and live demos
- **Skills Visualization**: Animated skill bars and technology icons with proficiency levels
- **Contact Form**: Validated contact form with email integration and user feedback
- **Professional Footer**: Comprehensive footer with quick links, social media, and contact information
- **Scroll to Top**: Smooth scroll-to-top button for better navigation
- **SEO Optimized**: Enhanced meta tags, Open Graph tags, and semantic HTML
- **Smooth Scrolling**: Seamless navigation between sections with active state indicators
- **Mobile Responsive**: Fully optimized for all device sizes with mobile-first approach
- **Performance Optimized**: Fast loading, optimized animations, and smooth interactions
- **Accessibility**: ARIA labels, keyboard navigation, and focus management

## 🚀 Quick Start

### Install dependencies:

```bash
npm install
```

### Start development server:

```bash
npm start
```

The dev server runs at [http://localhost:5173](http://localhost:5173)

### Build for production:

```bash
npm run build
```

## 🛠️ Tech Stack

- **Vite** - Build tool
- **React** - UI library
- **Tailwind CSS** - Styling
- **React Scroll** - Smooth scrolling navigation
- **Lottie** - Animations
- **React Icons** - Icon library

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── NavBar.jsx
│   │   ├── Portfolio.jsx
│   │   └── SocialLinks.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Name**: Update in `src/components/NavBar.jsx`, `src/components/Home.jsx`, and `src/components/Footer.jsx`
2. **About Section**: Edit `src/components/About.jsx` to reflect your background and skills
3. **Projects**: Modify the `portfolios` array in `src/components/Portfolio.jsx` with your projects
4. **Skills**: Update the `experencies` array in `src/components/Experience.jsx` with your technologies
5. **Social Links**: Edit `src/components/SocialLinks.jsx` and `src/components/Footer.jsx`
6. **Contact Form**: Update email in `src/components/Contact.jsx` and integrate with EmailJS or your backend
7. **Resume**: Add your resume PDF to the `public` folder and update the download link in `src/components/Home.jsx`
8. **SEO**: Update meta tags in `public/index.html` with your information

### Styling

- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

## 📱 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d build"
   }
   ```
4. Run `npm run build` then `npm run deploy`

### Vercel

1. Import the repository and set **Root Directory** to `Portfolio`.
2. Build command: `npm run build` (default via `vercel.json`).
3. Output directory: `dist`.
4. Contact email is configured in `src/config/constants.js` (`CONTACT_EMAIL`).

### Other Platforms

- **Netlify**: Connect your repository, root `Portfolio`, build `npm run build`, publish `dist`
- **AWS Amplify**: Connect repository and configure build settings

## 📝 Notes

- Make sure to update all placeholder links and information throughout the components
- Replace the contact form endpoint with your own backend service or EmailJS integration
- Update social media links with your actual profiles in `SocialLinks.jsx` and `Footer.jsx`
- Add your own project images and descriptions in the `portfolios` array
- Add your resume PDF to the `public` folder for download functionality
- Update the Open Graph URL in `public/index.html` with your actual portfolio URL
- Consider adding EmailJS for contact form functionality (see `src/components/Contact.jsx` for integration points)
- All components are fully responsive and optimized for production use

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by Edmund Blessing
