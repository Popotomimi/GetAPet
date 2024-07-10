const express = require("express");
const cors = require("cors");
const port = 8800;

const app = express();

// Config JSON response
app.use(express.json());

// Solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("public"));

//Routes
const UserRoutes = require("./routes/UserRoutes.js");
const PetRoutes = require("./routes/PetRoutes.js");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(port);
