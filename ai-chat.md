## Git & GitHub Setup

**User:**  
How do I initialize a Git repository for my personal website project?

**AI:**  
Navigate to your project directory and run:
```bash
git init

This creates a local Git repository to track changes.

⸻

User:
How do I track my project files and make my first commit?

AI:
Use the following commands:

git status
git add .
git commit -m "Initial project structure for personal website"

This stages all files and saves the first snapshot of the project.

⸻

User:
How do I push my local repository to GitHub?

AI:
First, connect the local repository to GitHub:

git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main

This publishes the project to a public GitHub repository.

⸻

Website Structure Guidance

User:
What files should my personal website include?

AI:
The website should include:
	•	index.html (Home page)
	•	about.html (About page)
	•	projects.html (Projects page)
	•	assets/css/styles.css (Styling)
	•	assets/js/script.js (JavaScript functionality)

This structure keeps the website organized and easy to maintain.

⸻

User:
Do I need navigation and footer sections?

AI:
Yes. A navigation bar allows users to move between pages, and a footer can include:
	•	GitHub profile link
	•	Codecademy profile link
	•	Email contact
	•	Repository link

These elements improve usability and meet course requirements.

⸻

Debugging & Error Resolution

User:
My changes are not showing up in the browser even after refreshing. What could be wrong?

AI:
Common issues include:
	•	Incorrect file paths for CSS or JavaScript
	•	Browser cache not updating
	•	Editing a different file than the one opened in the browser

The solution is to:
	•	Double-check <link> and <script> paths
	•	Hard refresh the page
	•	Ensure the correct file is opened with Live Server

⸻

User:
Why is my JavaScript file not working?

AI:
Make sure:
	•	The file name matches exactly (e.g., script.js)
	•	The script path is correct:

<script src="assets/js/script.js"></script>

	•	The script is loaded at the end of the <body> tag

⸻

Live Preview During Development

User:
How can I see my website live while making changes?

AI:
Use Live Server in VS Code or Cursor:
	1.	Open index.html
	2.	Right-click → Open with Live Server
	3.	Changes appear instantly in the browser

This helps speed up development and debugging.

⸻

Deployment to GitHub Pages

User:
How do I host my website using GitHub Pages?

AI:
	1.	Push the project to a public GitHub repository
	2.	Go to Settings → Pages
	3.	Select the main branch and /root directory
	4.	Save the settings

The website becomes available at:

https://USERNAME.github.io/REPOSITORY_NAME
