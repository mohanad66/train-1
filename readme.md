# Random User Fetch Application

This is a simple web application that fetches random user data from the [Random User API](https://randomuser.me/api/) and displays the user's name on the webpage.

## Features

- Fetches random user data from the Random User API.
- Displays the user's title, first name, and last name on the webpage.
- Error handling for failed API requests.

## How It Works

1. **HTML Structure**:
   - The HTML file contains a paragraph element (`<p>`) with the ID `write` where the user's name will be displayed.
   - A button with the ID `btn` is used to trigger the fetch operation.

2. **JavaScript Functionality**:
   - When the button is clicked, an asynchronous function `userData()` is called.
   - The `userData()` function fetches data from the Random User API.
   - The response is then parsed as JSON, and the user's name (title, first name, and last name) is extracted and displayed in the paragraph element.
   - If an error occurs during the fetch operation, it is caught and logged to the console.

## Code Explanation

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random User Fetch</title>
</head>
<body>
    <p id="write"></p>
    <button id="btn">Fetch User</button>
    <script type="module" src="index.js"></script>
</body>
</html>
```

### JavaScript (index.js)
```javascript
let btn = document.getElementById("btn");

async function userData() {
    const response = await fetch("https://randomuser.me/api/");
    let p = document.getElementById("write");
    try {
        const data = await response.json();
        let i = data.results[0].name;
        p.innerText = i.title + " " + i.first + " " + i.last;
        console.log(data.results, i);
    } catch (err) {
        console.log(err);
    }
}

btn.addEventListener("click", async () => {
    userData();
});
```

## How to Use

1. Clone the repository or download the HTML and JavaScript files.
2. Open the `index.html` file in a web browser.
3. Click the "Fetch User" button to fetch and display a random user's name.

## Dependencies

- This project uses the [Random User API](https://randomuser.me/api/) to fetch random user data.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.

## Author

Mohanad Mahmoud , Mohammed Elghobashy , Hamza Ahmed Mohammed

---

Feel free to customize this README file according to your needs!