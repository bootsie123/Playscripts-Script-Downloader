# Playscripts Script Downloader

A simple node application to download play scripts from [playscripts.com](https://playscripts.com). It features a simple webserver to download scripts remotely and an option to download scripts through a command-line interface.

## Installation

Clone the repository using [git](https://git-scm.com/) and then use [npm](https://www.npmjs.com/) to install the node modules.

```bash
git clone https://github.com/bootsie123/Playscripts-Script-Downloader.git

npm install
```

Alternatively you can install the application with docker.

```bash
docker pull bootsie123/playscripts-script-downloader
```

## Usage (Web Server)

To run the webserver simply run:

```bash
npm start
```

This will run the server on port `3000` and allow you to download files using the following URL format:

```http://localhost:3000/id```

Replace `id` with the ID of the script you wish to download. The ID can be found in the URL. For example:

```https://www.playscripts.com/play/3211```

The ID here would be `3211`

## Usage (CLI)

To use the CLI version simply run:

```bash
node server.js id
```

Replace `id` with the ID of the script you wish to download. To download more than one script at a time you can add a space between ids. For example:

```bash
node server.js 0001 0002 0003
```

This will download the scripts with the ids `0001`, `0002` and `0003` into a folder called `downloads` in the project directory.


## Contributing
Pull requests are welcome. Any changes are appreciated!
## License
[ISC](https://choosealicense.com/licenses/isc/)
