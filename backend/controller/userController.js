let users =  [];



// ============================== CREATE USER ============================== //

export const  adduser = (req, res) =>{
    const {name, email} = req.body;
    if (!name || !email) {
        return res.status(400).json({message:"Name And Email Required"})
    };
    const id = users.length + 1;
    const newUser = {id, name, email};
    users.push(newUser);
    res.status(201).json({success:true,
        message:"User Add Successfully",
        data:newUser
    })
}


// ============================== GET ALL USER ============================== //

export const getAll = (req, res) =>{
    res.json(users)
}

// ============================== GET USER BY ID ============================== //


export const getById = (req , res) =>{
      
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
     if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
}

export const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) return res.status(404).json({ error: "User not found" });

  users[userIndex] = { ...users[userIndex], name, email };
  res.json({
    success:true,
    message:"User Update Successfully",
    update:users[userIndex]
  });
};

// ============================== DELETE USER BY ID ============================== //

export const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) return res.status(404).json({ error: "User not found" });

  const deletedUser = users.splice(userIndex, 1);
  res.json({ success: true , message: "User deleted", user: deletedUser[0] });
};