# Portfolio Website

A modern, responsive portfolio website built with Angular and styled with Tailwind CSS. This website showcases professional experience, personal projects, and provides an elegant way to connect with visitors.

## 👨‍💻 About Me

Hi, I'm **Noureldeen Ahmed** - a software engineering graduate with 3 years of experience doing what I love. This portfolio website represents my journey in software development, showcasing the projects I've worked on and the technologies I'm passionate about.

### Professional Background
- **Experience**: 3+ years in software engineering
- **Education**: Software Engineering Graduate
- **Passion**: Building useful, impactful software solutions
- **Expertise**: Full-stack development with modern web technologies

### What You'll Find Here
This portfolio serves as a comprehensive showcase of my:
- **Professional Experience**: Including work at companies like RBC, ecobee, System1, and EBC
- **Personal Projects**: Creative solutions and technical experiments
- **Technical Skills**: Demonstrated through real-world applications
- **Professional Journey**: My growth and evolution as a software engineer

I believe in creating software that not only works well but also provides meaningful value to users. Every project in this portfolio reflects my commitment to clean code, user experience, and continuous learning.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Custom CSS animations and transitions
- **Modern Typography**: Clean fonts with Courier New and Roboto Mono
- **Interactive Elements**: Hover effects and dynamic content
- **Professional Layout**: Grid-based design with optimized spacing
- **Contact Integration**: Direct links to email, GitHub, and LinkedIn

## 🚀 Technologies Used

- **Frontend Framework**: Angular
- **Styling**: Tailwind CSS
- **Fonts**: Courier New, Roboto Mono
- **Build Tool**: Angular CLI

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🛠️ Development

### Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests
- `ng lint` - Run linting

### Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── background/
│   │   ├── blog/
│   │   ├── carousel/
│   │   ├── dark-mode-button/
│   │   ├── info-buttons/
│   │   ├── navbar/
│   │   ├── project-container/
│   │   └── work-experience-container/
│   ├── pages/              # Main pages
│   │   ├── home-page/
│   │   ├── personal-projects-page/
│   │   └── work-experience-page/
│   ├── models/             # TypeScript interfaces
│   ├── services/           # Angular services
│   └── enums/              # TypeScript enums
├── assets/                 # Static assets
└── styles.scss            # Global styles
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:

- **Custom Colors**: Accent color `rgb(227, 45, 145)`, custom backgrounds
- **Custom Fonts**: Courier New and Roboto Mono font families
- **Responsive Breakpoints**: Mobile-first design with `md:` breakpoint
- **Custom Shadows**: Accent-colored shadows for visual elements

### Key Components

- **Home Page**: Main landing page with introduction and contact links
- **Dark Mode Service**: Global theme management
- **Info Buttons**: Navigation and action buttons
- **Responsive Layout**: Mobile and desktop optimized layouts

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'accent': 'rgb(227, 45, 145)',
  'dark-background': 'rgb(22, 22, 22)',
  'light-background': '#f5f5f5',
  'custom-white': 'rgb(226, 223, 225)',
}
```

### Fonts

Modify font families in the Tailwind config:

```javascript
fontFamily: {
  'roboto': ['Roboto Mono', 'sans-serif'],
  'courier': ['Courier New', 'Courier', 'monospace'],
}
```

### Animations

Custom animations are defined in component SCSS files:
- `text-shrink`: Text size animation
- `fade-in`: Opacity transitions
- `animate-in-list`: Staggered list item animations

## 📱 Responsive Design

The website follows a mobile-first approach:

- **Base styles**: Mobile devices (< 768px)
- **md: prefix**: Tablet and desktop (≥ 768px)
- **Flexible layouts**: Grid and flexbox for different screen sizes
- **Optimized typography**: Viewport-based font sizing

## 🌙 Dark Mode

Dark mode is implemented using:
- Angular service for state management
- Conditional CSS classes
- Tailwind's dark mode utilities
- Smooth transitions between themes

## 📧 Contact Information

The website includes direct links to:
- Email: [nnourr.me@nnourr.me](mailto:nnourr.me@nnourr.me)
- GitHub: [github.com/nnourr](https://github.com/nnourr)
- LinkedIn: [linkedin.com/in/nnourr](https://linkedin.com/in/nnourr)

## 🚀 Deployment

### Build for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact me directly through the website.

---

Built with ❤️ by Noureldeen Ahmed

