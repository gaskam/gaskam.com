Install dependencies using Bun:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```
Open your browser and visit http://localhost:3000.

To build the project for production:

```bash
bun run build
```

You can dockerize the project using the Dockerfile provided in the repository. To build the docker image, run the following command:

```bash
docker build --pull -t gaskam .
```

To run the docker container, run the following command:

```bash
docker run gaskam
```

The application will be available at http://localhost:3000.