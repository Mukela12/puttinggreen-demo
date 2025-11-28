# Quick Setup Guide

This guide will help you get the PuttingGreen.com Installer Directory running on your local machine in just a few minutes.

## What You Need

Before you start, make sure you have:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- A **code editor** (optional, but helpful) - [VS Code](https://code.visualstudio.com/) is recommended
- A **terminal/command line** application

## Step-by-Step Setup

### 1. Extract or Clone the Project

If you received a ZIP file:
```bash
# Extract the ZIP file to a folder of your choice
# Then navigate to that folder in your terminal
cd path/to/puttinggreen-installer-directory
```

If you have access to the GitHub repository:
```bash
git clone <repository-url>
cd puttinggreen-installer-directory
```

### 2. Install Dependencies

Run this command in your terminal:
```bash
npm install
```

This will download all the necessary packages. It may take 1-2 minutes.

### 3. Start the Development Server

Run this command:
```bash
npm run dev
```

You should see output like:
```
▲ Next.js 16.0.5
- Local:        http://localhost:3000
- Ready in 2.3s
```

### 4. View the Application

Open your web browser and go to:

- **Landing Page:** [http://localhost:3000](http://localhost:3000)
- **Installer Directory:** [http://localhost:3000/installers-test](http://localhost:3000/installers-test)

That's it! The application is now running on your computer.

## What You Can Do

Once the app is running, you can:

✅ **Browse installers** - View all 15 mock installer profiles
✅ **Filter by city** - Select a city from the dropdown
✅ **Filter by skill level** - Choose Master, Intermediate, or Novice
✅ **Search** - Type keywords to find specific installers
✅ **Sort** - Organize by name, experience, or skill level
✅ **View details** - Click "View Profile" to see full installer information
✅ **View portfolios** - Browse installer work galleries
✅ **Request quotes** - Try the quote request form (non-functional in test)

## Stopping the Server

To stop the development server:
- Press `Ctrl + C` (or `Cmd + C` on Mac) in your terminal

## Making Changes

If you want to modify the code:
1. Open the project folder in your code editor
2. Make your changes to the files
3. Save the files
4. The browser will automatically refresh and show your changes!

## Project Routes

- `/` - Landing page with project overview
- `/installers-test` - Main installer directory with filters
- `/installers-test/[id]` - Individual installer detail pages (e.g., `/installers-test/1`)

## Common Issues

### "npm: command not found"
You need to install Node.js first. Download it from [nodejs.org](https://nodejs.org/)

### "Port 3000 is already in use"
Another application is using port 3000. Either:
- Stop the other application, or
- Run `npm run dev -- -p 3001` to use port 3001 instead

### "Module not found" errors
Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

### Images not showing
Images are stored in `/public/images/golf/`. Make sure this folder exists and contains:
- `/cards/` - 15 installer card images
- `/hero/` - 3 hero images
- `/portfolio/` - 15 installer portfolio directories

## Building for Production

When you're ready to deploy:

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

Then visit [http://localhost:3000](http://localhost:3000)

## Need Help?

- Check the main **README.md** for detailed documentation
- Check **DEPLOYMENT.md** for deployment instructions
- Review the code comments in the source files

## Live Demo

The project is already deployed at:
- **Live Site:** [https://puttinggreen.netlify.app/](https://puttinggreen.netlify.app/)
- **Installer Directory:** [https://puttinggreen.netlify.app/installers-test](https://puttinggreen.netlify.app/installers-test)

---

**Built by:** Fluxium (Mukela & Rahul)
**Project:** PuttingGreen.com Installer Directory Test Task
