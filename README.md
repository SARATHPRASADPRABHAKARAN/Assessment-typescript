# Typescript- crud

This project consist of basic CRUD operation with nodejs express as backend framework with typescript and SQL as database.




## API Reference

#### Get all cameras

```http
  GET /api/allcam
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |


#### Create new camera

```http
  POST /api/cameras
```

| body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of camera to be created |
| `description`      | `string` | **Required**. Description of camera to be created |
| `url`      | `string` | **Required**. URL of camera to be created |



#### delete individual camera

```http
  GET /api/deletecam/{{id}}
```
where id is the id of particular camera to be deleted,

#### Get all Networks from database

```http
  GET /api/allnetwork
```




#### Create new network

```http
  POST /api/networks
```

| body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of camera to  be created in networkTable  |
| `descriptions`      | `string` | **Required**. Description of camera to be created |
| `cameras`      | `Number` | **Required**. Id of camera to be associated with network |



## How to run the project


 Setup the following dependencies-

 - Node (version 14 or above)
  - MySql
  - Sequelize ORM (as database ORM )
   

To run the project:

- install the required node modules
```bash
  npm i
```
- start the project
```bash
  npm start
```
