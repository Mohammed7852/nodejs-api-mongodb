
export let mysqlConfiguration ={
    type: "mysql",
    host: "35.222.108.74",
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