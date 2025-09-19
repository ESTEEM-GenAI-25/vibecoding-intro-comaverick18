# Portfolio Content Customization Guide

This portfolio website uses a separate configuration file (`content.js`) to manage all text content, making it easy to update without touching the HTML code.

## How to Update Content

### 1. Edit the `content.js` file
All customizable text is stored in the `portfolioContent` object. Simply edit the values in this file to update your website content.

### 2. Key Sections You Can Customize:

#### **Personal Information**
```javascript
personal: {
    name: "Your Name",
    title: "Your Professional Title",
    tagline: "Your professional tagline or elevator pitch",
    email: "your.email@domain.com"
}
```

#### **About Section**
```javascript
about: {
    greeting: "Hi, I'm [Your Name]",
    bio: [
        "First paragraph of your bio...",
        "Second paragraph of your bio..."
    ]
}
```

#### **Skills**
Add, remove, or modify skills in each category:
```javascript
skills: {
    categories: [
        {
            title: "💻 Technical Skills",
            skills: ["Python", "SQL", "Add Your Skills Here"]
        }
    ]
}
```

#### **Experience**
Update your work history:
```javascript
experience: {
    jobs: [
        {
            company: "Company Name",
            role: "Your Role",
            description: "Description of your work...",
            brandColor: "#hexcolor", // Company brand color
            brandAbbrev: "ABBREV" // Short company abbreviation
        }
    ]
}
```

#### **Projects**
Showcase your work:
```javascript
projects: {
    items: [
        {
            title: "Project Name",
            description: "Project description with results...",
            tags: ["Technology", "Used", "In", "Project"],
            link: "https://link-to-project.com" // Update with actual links
        }
    ]
}
```

#### **Contact Links**
Update your social media and contact information:
```javascript
contact: {
    links: [
        {
            label: "📧 Email",
            url: "mailto:your.email@domain.com",
            ariaLabel: "Send email to [Your Name]"
        }
    ]
}
```

### 3. How It Works

- The `content.js` file is loaded automatically when the page loads
- JavaScript dynamically updates all text content based on your configuration
- The HTML file remains unchanged - only edit `content.js` for content updates
- Changes take effect immediately when you refresh the page

### 4. Adding New Content

To add new projects, skills, or experience entries:
1. Copy an existing entry in the appropriate array
2. Modify the values to match your new content
3. Save the file and refresh your browser

### 5. Company Branding Colors

For experience entries, you can customize company branding:
- `brandColor`: The main company color (used for borders and accents)
- `brandBgColor`: Background color for the company badge (optional, defaults to brandColor)
- `brandAbbrev`: Short abbreviation shown in the company badge
- `hasAccentDot`: Set to `true` for companies like Deloitte that need an accent dot

### 6. File Structure

```
your-portfolio/
├── index.html          # Main website file (don't edit for content)
├── content.js          # Content configuration (edit this!)
├── CONTENT_GUIDE.md    # This guide
└── README.md           # Project documentation
```

## Tips

- Always save the `content.js` file after making changes
- Refresh your browser to see updates
- Keep descriptions concise but impactful
- Update project links when you have live demos or repositories
- Use consistent formatting for professional appearance

## Backup

Before making major changes, consider backing up your `content.js` file to preserve your current content.
