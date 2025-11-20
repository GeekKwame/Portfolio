# Edmund Blessing — Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. Showcasing projects, experience, skills, and contact information with beautiful animations and interactive elements.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Interactive Animations**: Scroll-triggered animations, typing effects, and hover interactions
- **Portfolio Showcase**: Beautiful project cards with descriptions and tags
- **Skills Visualization**: Animated skill bars and technology icons
- **Contact Form**: Validated contact form with modern styling
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Responsive**: Fully optimized for all device sizes
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Quick Start

### Install dependencies:

```bash
npm install
```

### Start development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for production:

```bash
npm run build
```

## 🛠️ Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **React Scroll** - Smooth scrolling navigation
- **Lottie** - Animations
- **React Icons** - Icon library

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
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
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── tailwind.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Name**: Update in `src/components/NavBar.jsx` and `src/components/Home.jsx`
2. **About Section**: Edit `src/components/About.jsx`
3. **Projects**: Modify the `portfolios` array in `src/components/Portfolio.jsx`
4. **Skills**: Update the `experencies` array in `src/components/Experience.jsx`
5. **Social Links**: Edit `src/components/SocialLinks.jsx`
6. **Contact Form**: Update the form action URL in `src/components/Contact.jsx`

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

### Other Platforms

- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Import your repository and deploy
- **AWS Amplify**: Connect repository and configure build settings

## 📝 Notes

- Make sure to update all placeholder links and information
- Replace the contact form endpoint with your own backend service
- Update social media links with your actual profiles
- Add your own project images and descriptions

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by Edmund Blessing
