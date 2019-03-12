import app from "./index";

const PORT = 3300;

app.set("port", process.env.PORT || PORT);

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:%d`, app.get("port"));
});