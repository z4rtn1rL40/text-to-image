
## Installation

Install my-project with npm

To install dependencies run

```bash
    npm install
```

If you use yarn run following

```
    yarn
```

To run the project

```bash
    yarn start 
```

To run the project in development mode run

```bash
    yarn start:dev
```

# Usage
To generate an image use any http client are comfortable with and make a [POST] call to http://localhost:8888/images/image with request body containing following properties. All following properties are mandatory.

```
    {
        "author": "string",
        "title": "string",
        "content": "string"
    }
```

As a result you'll have generated image with red background and the text you've given.

## Contact Information
vardanakoyan@gmail.com
