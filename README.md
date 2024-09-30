# NASA AOPD (Astronomy Picture of the Day)

## Overview
NASA AOPD is a web application that fetches and displays the Astronomy Picture of the Day (APOD) using NASA's API. Users can view detailed information about each image, including its title, description, and high-definition version. The interface is built dynamically using JavaScript and provides a smooth loading experience with animations.

## Features
- Fetches 10 random astronomy pictures from NASA's APOD API.
- Displays images with their title, explanation, and date.
- Links to view the full-size, high-definition images in a new tab.
- Includes animations using AOS (Animate On Scroll) for a smooth user experience.
- A responsive design with a loading indicator while fetching new data.

### Installation & Setup
1. Open `index.html` in your browser.  
   No additional setup is required; the app fetches data directly from NASA's API.

### Usage
Upon loading the page, the app automatically fetches 10 random astronomy pictures from NASA's APOD API. To load more images, click the "Load more" button in the navigation bar. Each image card contains a link to view the full high-definition version in a new tab.

### Technologies Used
- HTML5, CSS3, and JavaScript
- NASA APOD API
- AOS (Animate On Scroll) Library for animations
- Font Awesome for icons

### API Key
The app currently uses the NASA demo API key (DEMO_KEY) in the script. For production use, you should replace the API key in `app.js`:
```javascript
const apiKey = "YOUR_NASA_API_KEY";
```

You can obtain your API key from the [NASA API Portal](https://api.nasa.gov/).

### Live Demo
The application is live and can be accessed here:

[Live Demo](https://manojk0303.github.io/nasa-api-project/)

### Screenshots
**Main Page**

![image](https://github.com/user-attachments/assets/ac5e37de-64f3-43f6-960b-585551f26409)

**Expanded Image View**

![image](https://github.com/user-attachments/assets/99ee2ef8-3fa4-4440-b39e-6b9094f3ce2f)

## License
This project is open-source and available under the MIT License.
