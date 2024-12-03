// export default function Home() {
//   return <div>Home page here we go!</div>;
// }

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth/client"; //import the auth client
import { useState } from "react";
import { toast } from "sonner";
import { createEvent } from "./actions";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null | undefined>();

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        image: undefined,
        // image: image ? convertImageToBase64(image) : undefined,
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard
        },
        onError: (ctx) => {
          toast(ctx.error.message);
        },
      }
    );
  };

  return (
    <div className="grid place-items-center">
      <div className="max-w-xl space-y-std-sm p-std-content">
        <Input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
        <Button onClick={signUp}>Sign Up</Button>
        <Button
          onClick={() =>
            createEvent({
              title: "My First Marathon",
              year: 2023,
              month: 10,
              day: 15,
              hour: 8,
              minute: 30,
              detailsRaw:
                "I woke up early in the morning, filled with excitement and a bit of nervousness. As I crossed the finish line, I felt a surge of accomplishment and pride.",
              detailsSummary:
                "Jason completed his first marathon on October 15, 2023, a moment filled with excitement and pride.",
            })
          }
        />
      </div>
    </div>
  );
}
