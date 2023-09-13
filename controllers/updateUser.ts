import { Request, Response } from "express";
import db from "../db/index.js";
export const updateUser = async (req: Request, res: Response) => {
  const { username, name, image, bio } = req.body;

  try {
    const user = await db.query(
      `INSERT INTO channels(username, name,image, bio, onboarded) VALUES($1, $2, $3, $4, $5) ON CONFLICT(username) DO UPDATE SET name=$2, image=$3, bio=$4, onboarded=$5 RETURNING *`,
      [username, name, image, bio, true]
    );
    if (user) {
      console.log("the user is", user.rows[0]);
      res.status(200).json({
        message: "User updated successfully",
        data: user.rows[0],
      });
    }
  } catch (e) {
    console.log("Something went wrong while updating user", e);
    res.status(500).json({
      message: "Something went wrong while updating user",
    });
  }
};
