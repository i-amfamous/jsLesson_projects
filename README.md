# jsLesson_projects
a collectionof projects i build during my js lesson

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GIF Search</title>
    <style>
      :root {
        color-scheme: light;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #1d1d1f;
        background: #f5f5f7;
      }

      * {
        box-sizing: border-box;
      }

      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        padding: 32px 18px;
        background:
          radial-gradient(ellipse at 50% 0%, #ffffff 0, transparent 55%),
          #f5f5f7;
      }

      .search-card {
        width: min(100%, 560px);
        padding: clamp(28px, 6vw, 48px);
        border: 1px solid rgb(0 0 0 / 5%);
        border-radius: 28px;
        background: rgb(255 255 255 / 88%);
        box-shadow: 0 24px 70px rgb(29 29 31 / 10%);
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: clamp(2rem, 7vw, 3rem);
        letter-spacing: -0.055em;
        line-height: 1.08;
      }

      .intro {
        margin: 14px 0 28px;
        color: #6e6e73;
        font-size: 1rem;
        line-height: 1.5;
      }

      .search-form {
        display: flex;
        gap: 10px;
      }

      .input {
        min-width: 0;
        flex: 1;
        padding: 14px 16px;
        border: 1px solid #d2d2d7;
        border-radius: 14px;
        outline: none;
        background: #fff;
        color: #1d1d1f;
        font: inherit;
        transition:
          border-color 160ms ease,
          box-shadow 160ms ease;
      }

      .input::placeholder {
        color: #86868b;
      }

      .input:focus {
        border-color: #0071e3;
        box-shadow: 0 0 0 4px rgb(0 113 227 / 16%);
      }

      .submit {
        padding: 0 20px;
        border: 0;
        border-radius: 14px;
        background: #0071e3;
        color: white;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        transition:
          background 160ms ease,
          transform 160ms ease;
      }

      .submit:hover {
        background: #0077ed;
      }

      .submit:active {
        transform: scale(0.97);
      }

      .submit:focus-visible {
        outline: 3px solid rgb(0 113 227 / 35%);
        outline-offset: 3px;
      }

      .message {
        min-height: 1.5em;
        margin: 14px 0 0;
        color: #d70015;
        font-size: 0.9rem;
      }

      .show {
        display: block;
        width: 100%;
        max-height: 420px;
        margin-top: 10px;
        border-radius: 18px;
        object-fit: contain;
      }

      .show[src=""] {
        display: none;
      }

      @media (max-width: 440px) {
        .search-form {
          flex-direction: column;
        }

        .input,
        .submit {
          min-height: 50px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
        }
      }
    </style>
  </head>
  <body>
    <main class="search-card">
      <h1>Find your GIF.</h1>
      <p class="intro">Search a mood, moment, or anything you can imagine.</p>
      <div class="search-form">
        <input
          type="text"
          placeholder="Try “happy dance”"
          class="input"
          aria-label="Search for GIFs"
        />
        <button class="submit">Search</button>
      </div>
      <p class="message" role="status" aria-live="polite"></p>
      <img src="" alt="" class="show" />
    </main>

    <script>
      const input = document.querySelector(".input");
      const submitBtn = document.querySelector(".submit");
      const show = document.querySelector(".show");
      const message = document.querySelector(".message");

      function findGiph() {
        const inputData = input.value.trim();

        if (inputData === "") {
          message.textContent = "Enter text to search for GIF images";
          return;
        }

        message.textContent = "";
        input.value = "";

        const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=bfqWjTcXvI7Skvj5UKm8MWcXZDOgXuRt&tag=${inputData}&rating=g`;
        fetch(gifUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
          })

          .then((data) => {
            show.src = data.data.images.original.url;
            show.alt = data.data.images.original.alt;
          })
          .catch((error) => {
            console.error("Error fetching the image:", error);
            message.textContent = "Could not load a GIF. Please try again.";
          });

        console.log(gifUrl);
      }

      submitBtn.addEventListener("click", findGiph);

      input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          findGiph();
        }
      });
    </script>
  </body>
</html>
