import React, { useRef, useState } from 'react';
import { inputComp } from './style';

interface ImageUploaderProps {
  onImageClick?: () => void;
}

import defaultImageUrl from './default-image.png'

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageClick }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (onImageClick) {
      onImageClick();
    } else if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Preview"
            style={{ borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover', cursor: 'pointer', border: '2px solid rgb(1, 255, 211)', marginRight: 20 }}
            onClick={handleClick}
          />
        ) : (
          <div
            style={{
              marginRight: 20,
              width: '120px',
              height: '120px',
              border: '2px solid rgb(1, 255, 211)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            <img src={defaultImageUrl} alt="Default" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default ImageUploader;
