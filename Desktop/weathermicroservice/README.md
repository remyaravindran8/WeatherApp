# Weather Update Microservice

The Weather Update Microservice is a small service that provides weather information for a given city. It utilizes the OpenWeatherMap API to fetch the current weather data. It also has a UI Page where a user can input data and it 

## Features

- Retrieve weather information for a specific city.
- Supports both Celsius and Fahrenheit temperature units.
- Returns data such as temperature, weather description, and city name.
- Gets data from user using an input field and a GET call and prints the same data as a string using a POST call

## Technologies Used

- JavaScript (Node.js)
- Express.js (web framework)
- OpenWeatherMap API (weather data)
- Axios (HTTP client)

## Getting Started

To run the Weather Update Microservice locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd weather-update-microservice`
3. Install the dependencies: `npm install`
4. Obtain an API key from the OpenWeatherMap website. [Sign up](https://home.openweathermap.org/users/sign_up) if you don't have one.
5. Rename the `.env.example` file to `.env` and replace `<YOUR_API_KEY>` with your actual API key.
6. Start the server: `npm start`
7. The microservice should now be running on `http://localhost:3000`.

## API Endpoints

### GET /weather/:city

Returns the current weather information for the specified city.

Parameters:

- `city` (required): The name of the city.

Example Request and Responses:

```
GET /weather/London
Retrieve weather information for a specific city in JSON format.
{
  "city": "London",
  "temperature": 17.5,
  "description": "Cloudy"
  .....
  .....
}

GET /
HTML page with input fields that takes you to another page when you tap submit.

GET /about
{
"name": "weathermicroservice",
"description": "A basic microservice weather application",
"Functionality": "The Weather Microservice is a small service that provides weather information for a given city"
}
```

Docker:
```
create docker file in project root folder
build docker: docker build -t weathermicroservice .
go to docker > images > (after build image should be listed) > run (allocate port [3000 in our case])
go to containers see our app running
```

Kubernetes:
```
create .yml file (deploy.yml in our case)
run kubectl apply -f deploy.yaml in cmd
check if multiple containers of same app is running
```

## Configuration

- `PORT`: The port number on which the server will run. Default is `3000`.
- `API_KEY`: Your API key for accessing the OpenWeatherMap API.
- `TEMP_UNIT`: The temperature unit to be used. Available options are `metric` (Celsius) and `imperial` (Fahrenheit). Default is `metric`.

## Contributing
Remya Ravindran : 2020HS70039
Harshitha S: 2020HS70006

## License

This project is licensed under the [MIT License](LICENSE).
