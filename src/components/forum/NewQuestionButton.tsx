
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Mic, Camera, X } from "lucide-react";

export function NewQuestionButton() {
  const [open, setOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // In a real app, would handle voice recording here
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="fixed flex items-center gap-2 shadow-lg bottom-6 right-6 bg-agrigreen-500 hover:bg-agrigreen-600">
          <PlusCircle className="w-5 h-5" />
          <span>Ask Question</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Ask a Question</DialogTitle>
          <DialogDescription>
            Share your farming question with the community.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Question Title</Label>
            <Input id="title" placeholder="Summarize your question" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="question">Details</Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleVoiceInput}
                className={`h-8 px-2 ${isRecording ? "text-red-500" : ""}`}
              >
                <Mic className="w-4 h-4 mr-1" />
                {isRecording ? "Recording..." : "Voice Input"}
              </Button>
            </div>
            <Textarea
              id="question"
              placeholder="Describe your question in detail..."
              className="min-h-[120px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (separate with commas)</Label>
            <Input id="tags" placeholder="rice, irrigation, pest control" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="photo">Add a Photo</Label>
            {photoPreview ? (
              <div className="relative">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="object-cover w-full h-48 rounded-md"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute p-1 rounded-full top-2 right-2 h-7 w-7"
                  onClick={removePhoto}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-24 border-dashed"
                  onClick={() => document.getElementById("photo")?.click()}
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Add a photo
                </Button>
              </div>
            )}
          </div>
        </form>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" className="bg-agrigreen-500 hover:bg-agrigreen-600">
            Post Question
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
