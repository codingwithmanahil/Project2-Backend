const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3000;
const users = [
        {
            id: 1,
            name: "Manahil Saddique",
            age: 19,
            city: "Pakistan",
            internship: "DecodeLabs",
            course: "Frontend & Backend Development",
            skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"]
        }
    ];
app.get("/", (req, res) => {
    res.json({
        message: "Hello DecodeLabs"
    });
});
app.get("/users", (req, res) => {
    

    res.json(users);
});
app.post("/users", (req, res) => {

    const newUser = req.body;

    users.push(newUser);

    res.json({
        message: "User Added Successfully",
        user: newUser
    });

});
app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.age = req.body.age;
    user.city = req.body.city;
    user.internship = req.body.internship;
    user.course = req.body.course;
    user.skills = req.body.skills;

    res.json({
        message: "User Updated Successfully",
        user: user
    });

});
app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User Deleted Successfully"
    });

});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
