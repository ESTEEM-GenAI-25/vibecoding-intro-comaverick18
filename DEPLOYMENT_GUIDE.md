# GitHub Pages Deployment Guide

## 🚀 Quick Setup Instructions

Follow these steps to publish your portfolio on GitHub Pages:

### Step 1: Create a GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click "New Repository"** (green button)
3. **Repository Settings:**
   - **Name**: `your-portfolio` (or any name you prefer)
   - **Description**: "Professional portfolio website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: ✅ Check "Add a README file"
4. **Click "Create repository"**

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)
1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop all files** from your project folder:
   - `index.html`
   - `content.js`
   - `charlie_headshot.jpg`
   - `.github/workflows/deploy.yml`
   - All other files
3. **Add commit message**: "Initial portfolio upload"
4. **Click "Commit changes"**

#### Option B: Using Git Commands (Advanced)
```bash
# Initialize git in your project folder
git init
git add .
git commit -m "Initial portfolio commit"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Source**: Select "GitHub Actions"
5. **Save** the settings

### Step 4: Wait for Deployment

1. **Go to "Actions"** tab in your repository
2. **Wait for the deployment** to complete (green checkmark)
3. **Your site will be available** at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 🔄 Making Updates

To update your portfolio:

1. **Edit `content.js`** directly on GitHub:
   - Go to your repository
   - Click on `content.js`
   - Click the pencil icon (Edit)
   - Make your changes
   - Click "Commit changes"

2. **GitHub Actions will automatically redeploy** your site within 1-2 minutes

## 📝 Repository Structure

Your repository should contain:
```
your-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment configuration
├── index.html                  # Main website file
├── content.js                  # Content configuration
├── charlie_headshot.jpg        # Your professional photo
├── CONTENT_GUIDE.md           # Content editing guide
├── DEPLOYMENT_GUIDE.md        # This deployment guide
└── README.md                  # Repository description
```

## 🌐 Custom Domain (Optional)

If you want to use your own domain:

1. **In repository Settings > Pages**
2. **Add your custom domain** (e.g., `charliemathes.com`)
3. **Create a CNAME file** in your repository with your domain
4. **Update your domain's DNS** to point to GitHub Pages

## 🔒 Security & Performance

- ✅ **HTTPS enabled** automatically
- ✅ **CDN powered** by GitHub
- ✅ **Fast global delivery**
- ✅ **Free SSL certificate**

## 🆘 Troubleshooting

### Site not loading?
- Check the "Actions" tab for deployment errors
- Ensure `index.html` is in the root directory
- Verify all file names match exactly

### Image not showing?
- Confirm `charlie_headshot.jpg` was uploaded
- Check file name spelling in `content.js`
- Ensure image file is in the root directory

### Need help?
- Check GitHub Pages documentation
- Review the Actions tab for error details
- Ensure repository is public

## 🎉 Success!

Once deployed, your professional portfolio will be:
- **Publicly accessible** at your GitHub Pages URL
- **Automatically updated** when you push changes
- **Professional and fast** with global CDN
- **Free to host** on GitHub Pages

Share your new portfolio URL with potential employers and clients!
