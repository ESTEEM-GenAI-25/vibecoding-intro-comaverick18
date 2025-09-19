// Portfolio Content Configuration
// Edit this file to customize all text content on your portfolio website

const portfolioContent = {
    // Personal Information
    personal: {
        name: "Charlie Mathes",
        title: "Data Scientist & Tech Consultant",
        tagline: "Building solutions that drive real value through data science and technical expertise",
        email: "charlie.mathes@nd.edu",
        profileImage: "charlie_headshot.jpg",
        profileImageAlt: "Charlie Mathes - Professional headshot showing a smiling man with glasses, beard, wearing a navy suit and tie"
    },

    // About Section
    about: {
        greeting: "Hi, I'm Charlie",
        bio: [
            "After graduating with a degree in mechanical engineering, I worked briefly in design, then spent 7 years at Deloitte as a tech consultant. Now, I am pursuing my interest in startups and data science in the ESTEEM program at the University of Notre Dame.",
            "I am a builder and driver at heart. I'm all about simplifying workflows, improving communication, and finding solutions that provide actual, immediate value."
        ]
    },

    // Skills Section
    skills: {
        title: "Skills & Expertise",
        categories: [
            {
                title: "💻 Technical Skills",
                skills: ["Python", "SQL", "Pandas", "Matplotlib", "BigQuery", "PostgreSQL", "GCP", "AWS", "VS Code", "GitHub", "Jupyter", "Tableau"]
            },
            {
                title: "📊 Data Science",
                skills: ["Machine Learning", "Predictive Modeling", "Data Engineering", "ETL", "Data Visualization", "Exploratory Analysis", "Feature Engineering", "NLP"]
            },
            {
                title: "🤖 AI Tools",
                skills: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity", "Cursor"]
            },
            {
                title: "🏢 Business",
                skills: ["Business Analysis", "Requirements Gathering", "Supply Chain", "Manufacturing", "Workflow Optimization", "Project Management"]
            }
        ]
    },

    // Experience Section
    experience: {
        title: "Experience",
        jobs: [
            {
                company: "BMG Solutions",
                role: "Data Engineering & Market Intelligence",
                description: "Focused on data engineering solutions and market data intelligence to drive business insights and decision-making.",
                brandColor: "#1a5490",
                brandAbbrev: "BMG"
            },
            {
                company: "Deloitte Consulting",
                role: "Technology Consultant (7 years)",
                description: "Extensive experience in technology consulting, helping organizations transform their operations and implement efficient solutions.",
                brandColor: "#86bc25",
                brandAbbrev: "Deloitte",
                hasAccentDot: true
            },
            {
                company: "On Mission Enterprises",
                role: "Aerospace & Software Development",
                description: "Contributed to aerospace and software projects in a startup environment, gaining valuable experience in agile development and innovation.",
                brandColor: "#ffffff",
                brandAbbrev: "OME"
            },
            {
                company: "University of Notre Dame - ESTEEM Program",
                role: "Current Student",
                description: "Pursuing advanced studies in entrepreneurship, technology, and innovation with a focus on startups and data science applications.",
                brandColor: "#ffffff",
                brandAbbrev: "ND",
                brandBgColor: "#003366"
            }
        ]
    },

    // Projects Section
    projects: {
        title: "Featured Projects",
        items: [
            {
                title: "Supply Chain Optimization Platform",
                description: "Built a comprehensive data pipeline and machine learning model to optimize supply chain operations, reducing costs by 15% and improving delivery times by 22%.",
                tags: ["Python", "Machine Learning", "SQL", "Tableau"],
                link: "#" // Update with actual project link
            },
            {
                title: "Manufacturing Process Analytics",
                description: "Developed predictive analytics solution for manufacturing quality control, implementing real-time monitoring and anomaly detection to reduce defect rates by 30%.",
                tags: ["Data Engineering", "BigQuery", "Pandas", "GCP"],
                link: "#" // Update with actual project link
            },
            {
                title: "Customer Behavior Analysis",
                description: "Implemented advanced NLP and clustering algorithms to analyze customer feedback and behavior patterns, providing actionable insights that increased customer retention by 18%.",
                tags: ["NLP", "Feature Engineering", "Matplotlib", "AWS"],
                link: "#" // Update with actual project link
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Get In Touch",
        links: [
            {
                label: "📧 Email",
                url: "mailto:charlie.mathes@nd.edu",
                ariaLabel: "Send email to Charlie Mathes"
            },
            {
                label: "💼 LinkedIn",
                url: "https://linkedin.com/in/charliemathes",
                ariaLabel: "Visit Charlie Mathes LinkedIn profile"
            },
            {
                label: "💻 GitHub",
                url: "https://github.com/charliemathes",
                ariaLabel: "Visit Charlie Mathes GitHub profile"
            },
            {
                label: "📝 Notion",
                url: "https://www.notion.so/charliemathes",
                ariaLabel: "Visit Charlie Mathes Notion workspace"
            }
        ]
    },

    // Footer
    footer: {
        copyright: "&copy; 2025 Charlie Mathes. All rights reserved."
    },

    // Navigation
    navigation: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ]
};

// Make content available globally
window.portfolioContent = portfolioContent;
