"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const PORT = 3300;
index_1.default.set("port", process.env.PORT || PORT);
index_1.default.listen(PORT, () => {
    console.log(`App is running on http://localhost:%d`, index_1.default.get("port"));
});
//# sourceMappingURL=server.js.map