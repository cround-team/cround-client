import { useRef, useState } from "react";

export default function useUploadImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setIsLoading(true);
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setTimeout(() => {
          setIsLoading(false); // 2초 뒤에 isLoading 값을 false로 변경
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    isLoading,
    selectedImage,
    previewImage,
    fileInputRef,
    handleFileChange,
  };
}
