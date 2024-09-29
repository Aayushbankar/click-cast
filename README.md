# ClickCast: Your Point for All Insights

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [About Us](#about-us)
- [Contact Information](#contact-information)

## Project Overview
ClickCast is a dynamic web application that serves as a news aggregator, providing users with the latest articles across various topics. It aims to deliver insightful content while ensuring an engaging user experience.

## Technologies Used
- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, Bootstrap
- **Database**: Custom data-fetching logic
- **APIs**: Fetch articles API (custom implementation)

## Features
- **Dynamic Article Loading**: Articles are fetched from a custom API and displayed in a paginated format.
- **Responsive Design**: The website is fully responsive and optimized for mobile devices.
- **About Page**: An informative page detailing the team behind ClickCast.
- **Contact Information**: Users can reach out via email or social media.

## Getting Started
To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aayushbankar/clickcast.git
   cd clickcast
   ```

2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   python app.py
   ```

4. Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Directory Structure
```
clickcast/
├── app.py
├── fetch_articles.py
├── templates/
│   ├── index.html
│   └── about.html
└── static/
    ├── css/
    │   ├── styles.css
    │   └── about-styles.css
    └── js/
        └── main.js
```

## Usage
- Navigate to the home page to view the latest articles.
- Use the pagination feature to explore more articles.
- Visit the "About" page to learn about the team and their mission.

## About Us
Welcome to ClickCast, your go-to platform for insightful news and information! Founded by tech enthusiasts Aayush Banakar and Anas Bavanai, we are dedicated to bringing you the latest articles and insights from various fields. Our mission is to provide a user-friendly experience where you can explore a diverse range of topics, stay informed, and engage with a community of like-minded individuals. With a passion for technology and a commitment to excellence, we strive to deliver high-quality content that keeps you connected and informed. Join us on this exciting journey as we explore the ever-evolving world of information!

## Contact Information
- **Email**: [enthusiadev@gmail.com](mailto:enthusiadev@gmail.com)
- **Instagram**: 
  - [Aayush Banakar](https://instagram.com/iamaayush_200)
  - [Anas Bavanai](https://instagram.com/anas_bavanai)

---

*This project is maintained by Aayush Bankar and Anas Bavanai.*
