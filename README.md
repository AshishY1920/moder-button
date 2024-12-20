
# Counter (Increment Decrement)


## Authors

- [@yadavashishdhirendra](https://github.com/AshishY1920)


## Demo

![App Screenshot](https://ashishy1920.github.io/Bag-manifest/ViteReactTS-GoogleChrome2024-12-2010-13-43online-video-cutter.com-ezgif.com-video-to-gif-converter.gif)

## Usage/Examples

```javascript
import "./App.css";
import { Button, useCounter } from "simple-increment-decrement-counter";

function App() {
  const { count, Increment, Decrement } = useCounter();

  return (
    <div>
      <h1 style={{ fontFamily: "Lexend" }}>{count}</h1>
      <Button onClick={Increment}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
      </Button>
      <Button onClick={Decrement}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14"
          />
        </svg>
      </Button>
    </div>
  );
}

export default App;

```

