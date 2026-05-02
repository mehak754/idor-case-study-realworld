
const express = require('express');
const app = express();

app.use(express.json());

// Fake database
const users = {
  1: { id: 1, name: "Mehak", role: "student", marks: 85 },
  2: { id: 2, name: "Rahul", role: "student", marks: 72 },
  99: { id: 99, name: "Admin", role: "admin", marks: null }
};

let loggedInUser = users[1]; // change this to simulate login


app.get('/api/user', (req, res) => {
  const userId = req.query.id;
  const user = users[userId];

  if (!user) return res.status(404).send("User not found");

  // No authorization check
  res.json(user);
});


app.get('/secure/user', (req, res) => {
  // Only return logged-in user's data
  res.json(loggedInUser);
});

//  ROLE-BASED ACCESS (better fix)
app.get('/secure/admin', (req, res) => {
  if (loggedInUser.role !== "admin") {
    return res.status(403).send("Access Denied");
  }
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
