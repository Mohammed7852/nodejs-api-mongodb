import app from "./index";

const PORT = 3000;
app.set("port", process.env.PORT || PORT);
app.listen(PORT,'0.0.0.0', () => {
    console.log(`App is running on http://0.0.0.0:%d`, app.get("port"));
});