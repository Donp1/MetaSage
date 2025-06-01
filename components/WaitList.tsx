"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function WaitlistModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      return toast.error("Please fill in all fields", {
        className: "bg-red-600 text-white",
        style: { backgroundColor: "red", color: "#fff" },
      });
    }
    toast.success("You've been added to the waitlist!", {
      style: { backgroundColor: "green", color: "#fff" },
    });
    setOpen(false);
    setEmail("");
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black text-white border border-gray-700">
          <DialogHeader>
            <DialogTitle>Join Our Waitlist</DialogTitle>
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

            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Join Waitlist
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
