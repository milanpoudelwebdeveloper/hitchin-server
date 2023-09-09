import "dotenv/config";
import { ClerkExpressWithAuth, LooseAuthProp } from "@clerk/clerk-sdk-node";

import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request extends LooseAuthProp {}
  }
}

const clerkAuthMiddleWare = ClerkExpressWithAuth({});

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  clerkAuthMiddleWare(req, res, (err: any) => {
    if (err) {
      res.status(401).send("Unauthenticated");
    } else {
      next();
    }
  });
};
