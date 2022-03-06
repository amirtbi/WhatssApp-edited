# Quasar App (whatsapp)

whatssapp pwa

## Install and download Node.js from the below link

See [Download Node.js V.12.2](https://nodejs.org/fa/blog/release/v6.12.2/).

## Install TailwindCss

### First install through the npm

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

### Configure your template path

```bash
    module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

```

### Add the Tailwind directives to your style tags

```bash
@import "tailwindcss/base";
@tailwind "tailwindcss/components";
@tailwind "tailwindcss/utilities";

```

## Install Quasar for first time

```bash
npm install -g @quasar/cli
```

### Create folder project

```bash
quasar create <folder-name>
```

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Format the files

```bash
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
