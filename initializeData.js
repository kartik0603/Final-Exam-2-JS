document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('users')) {
        const users = [
            {
                id: 1,
                username: "admin",
                email: "admin@example.com",
                password: "admin123",
                role: "admin"
            },
            {
                id: 2,
                username: "user",
                email: "user@example.com",
                password: "user123",
                role: "user"
            }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }

    if (!localStorage.getItem('courses')) {
        const courses = [
            {
                id: 1,
                name: "English for Common Interactions in the Workplace: Basic Level",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "1 to 3 Months",
                price: 15900,
                seats: 100,
                topics: ["Workplace Communication", "Basic English"],
                subtopics: ["Greetings", "Daily Interactions"]
            },
            {
                id: 2,
                name: "Introduction to Microsoft Excel",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/64/4a8b13f0e64dbdb41d587c7cea1103/excel-logo-4-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "1 to 2 Months",
                price: 12500,
                seats: 100,
                topics: ["Excel Basics"],
                subtopics: ["Formulas", "Charts"]
            },
            {
                id: 3,
                name: "Python for Data Science, AI & Development",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fc/c1b8dfbac740999b6256aca490de43/Python-Image.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "1 to 6 Months",
                price: 25999,
                seats: 100,
                topics: ["Python Programming", "Data Science"],
                subtopics: ["Numpy", "Pandas"]
            },
            {
                id: 4,
                name: "Build a free website with WordPress",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/da/c8df3880a940c8a4bb5e7467eb202a/wordpress_logo.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "1 to 2 Hours Daily for 7 Days",
                price: 1599,
                seats: 100,
                topics: ["Website Building"],
                subtopics: ["WordPress Basics", "Themes"]
            },
            {
                id: 5,
                name: "Business Analysis & Process Management",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/59/630408b17e41429a019ada61f22bc8/Courses-Project-images-06.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "1 Month",
                price: 6999,
                seats: 100,
                topics: ["Business Analysis"],
                subtopics: ["Process Management", "Data Analysis"]
            },
            {
                id: 6,
                name: "Google Ads for Beginners",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/d5/3e32a0a1d544c08ad1f6ee13be3f75/Paid-Media---April-2020-Recap-6-.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "1 Month",
                price: 8999,
                seats: 100,
                topics: ["Google Ads"],
                subtopics: ["Campaign Setup", "Ad Optimization"]
            },
            {
                id: 7,
                name: "Cybersecurity for Everyone",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c8/5bae18bb5d475d926526e6e8ac3cc6/maryland-cybersecurity-for-everyone-1-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
                duration: "21 Days",
                price: 0,
                seats: 100,
                topics: ["Cybersecurity Basics"],
                subtopics: ["Threats", "Protection"]
            },
            {
                id: 8,
                name: "Google IT Automation with Python Professional Certificate",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/6f/2a0dbe91f04e2b9ce48fabb56f161f/1060x596_GCC-photos_Brandon.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces",
                duration: "3 to 6 Months",
                price: 17999,
                seats: 100,
                topics: ["IT Automation", "Python"],
                subtopics: ["Scripting", "Automation Tools"]
            },
            {
                id: 9,
                name: "Applied Data Science with Python Specialization",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c8/8d6df01eb311e6b5f5f786b289d8ba/pythondatascience_specialization_final.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
                duration: "3 to 6 Months",
                price: 15999,
                seats: 100,
                topics: ["Data Science", "Python"],
                subtopics: ["Data Analysis", "Machine Learning"]
            },
            {
                id: 10,
                name: "Meta Front-End Developer Professional Certificate",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
                duration: "3 to 6 Months",
                price: 45900,
                seats: 100,
                topics: ["Front-End Development"],
                subtopics: ["HTML", "CSS", "JavaScript"]
            },
            {
                id: 11,
                name: "IBM Full Stack Software Developer Professional Certificate",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/collections/product-images/ibm-full-stack-cloud-developer.jpeg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
                duration: "3 to 6 Months",
                price: 59000,
                seats: 100,
                topics: ["Full Stack Development"],
                subtopics: ["Front-End", "Back-End"]
            }
        ];
        localStorage.setItem('courses', JSON.stringify(courses));
    }
});
