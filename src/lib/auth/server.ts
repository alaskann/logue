import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/lib/db";

export const auth = betterAuth({
  database: mongodbAdapter(client.db("admin")),
  emailAndPassword: {
    enabled: true,
  },
});
