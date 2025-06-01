"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function InfoBox({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    if (!email || !username) {
      return toast.error("Please fill in all fields", {
        className: "bg-red-600 text-white",
        style: { backgroundColor: "red", color: "#fff" },
      });
    }
    setOpen(false);
    toast.success("Mail sent successfully!", {
      className: "bg-green-600 text-white",
      style: { backgroundColor: "green", color: "#fff" },
    });
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle>Enter Your Info</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-900 text-white border-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">X (Twitter) Username</label>
              <Input
                type="text"
                placeholder="@yourhandle"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-900 text-white border-gray-700"
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
