
export let mysqlConfiguration ={
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "shabanah",
    password: "shabanah",
    database: "Bitcoin",
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
    logging: false
};