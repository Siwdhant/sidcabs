# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. The endpoint validates the input data and creates a new user in the database if the data is valid.

## Request Body
The request body should be a JSON object with the following fields:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response Body
The response body will be a JSON object with the following fields:
- `token` (string): The JWT token for the authenticated user.
- `captain` (object): The captain object containing the following fields:
  - `_id` (string): The ID of the captain.
  - `fullname.firstname` (string): The first name of the captain.
  - `fullname.lastname` (string): The last name of the captain.
  - `email` (string): The email address of the captain.
  - `vehicle` (object): The vehicle object containing the following fields:
    - `color` (string): The color of the vehicle.
    - `plate` (string): The license plate of the vehicle.
    - `capacity` (number): The capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.

Example:
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
