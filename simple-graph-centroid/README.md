# Simple Graph Centroid

This project is a simple web application that displays a graph with X and Y coordinates ranging from -10 to 10. Users can generate random points on the graph and see the centroid of those points marked.

## Project Structure

```
simple-graph-centroid
├── src
│   ├── index.html      # Main HTML document for the website
│   ├── style.css       # Styles for the webpage
│   └── app.js          # JavaScript logic for generating points and calculating the centroid
├── package.json        # npm configuration file
└── README.md           # Documentation for the project
```

## Features

- A graph that displays coordinates from -10 to 10.
- A button to generate between 2 and 4 random points on the graph.
- The previous points are removed each time new points are generated.
- The centroid of the generated points is calculated and marked with a red point.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-graph-centroid
   ```

2. Install dependencies (if any):
   ```
   npm install
   ```

3. Open `src/index.html` in your web browser to view the application.

## Usage

- Click the "Generate Points" button to create random points on the graph.
- The centroid will be automatically calculated and displayed.

## License

This project is licensed under the MIT License.