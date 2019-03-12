import app from "./index";
const PORT = 3000;

app.set("port", process.env.PORT || 3000);

app.listen(PORT, () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});