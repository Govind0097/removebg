
import React, { useState, useCallback, useRef } from 'react';
import { removeBackground } from '../services/geminiService';
import ImageSlider from './ImageSlider';
import { UploadIcon, CheckCircleIcon, ColorSwatchIcon, SparklesIcon, LoadingIcon } from './Icons';

const UploadSection: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>('https://picsum.photos/id/1025/600/400'); // Default before image
  const [processedImage, setProcessedImage] = useState<string | null>('https://picsum.photos/id/1025/600/400.webp?grayscale'); // Default after image with a filter for demo
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDemo, setIsDemo] = useState(true);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [bgType, setBgType] = useState<'transparent' | 'color'>('transparent');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsDemo(false);
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);

    try {
      const result = await removeBackground(file);
      if (result) {
        setProcessedImage(result);
      } else {
        setError('Failed to process image. Please try another one.');
      }
    } catch (err) {
      setError('An error occurred during background removal.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const transparentBgClass = "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20style%3D%22fill%3A%23f3f4f6%3B%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20style%3D%22fill%3A%23f3f4f6%3B%22%2F%3E%3C%2Fsvg%3E')] bg-center";

  const colorOptions = ['#ffffff', '#e5e7eb', '#2dd4bf', '#3b82f6', '#ef4444'];

  return (
    <section id="upload-section" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
          {!originalImage && !isLoading && (
             <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`border-4 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${isDragging ? 'border-accent bg-teal-50' : 'border-gray-300'}`}
              >
              <UploadIcon className="mx-auto h-16 w-16 text-gray-400"/>
              <p className="mt-4 text-lg font-semibold text-gray-700">Drag & drop an image here</p>
              <p className="text-gray-500 mt-1">or</p>
              <input type="file" ref={fileInputRef} onChange={onFileChange} accept="image/*" className="hidden" />
              <button onClick={handleUploadClick} className="mt-4 bg-accent text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-all">
                Choose a Photo
              </button>
            </div>
          )}
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-96">
                <LoadingIcon className="w-16 h-16 text-accent"/>
                <p className="mt-4 text-xl font-semibold text-gray-700 animate-pulse">Removing background...</p>
                <p className="text-gray-500 mt-1">AI is working its magic!</p>
            </div>
          )}

          {error && <div className="text-center text-red-500 font-medium p-4 bg-red-50 rounded-lg">{error}</div>}

          {originalImage && !isLoading && (
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner bg-gray-100">
                {isDemo && (
                  <div className="absolute top-4 left-4 z-20 bg-blue-500 text-white px-3 py-1 text-sm font-bold rounded-full shadow-lg">
                    DEMO
                  </div>
                )}
                <ImageSlider
                    beforeImage={originalImage}
                    afterImage={processedImage || ''}
                    afterImageContainerStyle={{
                      ...(bgType === 'transparent' && !isDemo && { backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20style%3D%22fill%3A%23f3f4f6%3B%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20style%3D%22fill%3A%23f3f4f6%3B%22%2F%3E%3C%2Fsvg%3E')`, backgroundSize: '20px 20px' }),
                      ...(bgType === 'color' && !isDemo && { backgroundColor: bgColor }),
                    }}
                />
              </div>

              {!isDemo && processedImage && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setBgType('transparent')} className={`p-2 rounded-full transition-all ${bgType === 'transparent' ? 'ring-2 ring-accent' : ''}`}>
                      <div className={`w-8 h-8 rounded-lg border border-gray-300 ${transparentBgClass}`}></div>
                    </button>
                    <button onClick={() => setBgType('color')} className={`p-2 rounded-full transition-all ${bgType === 'color' ? 'ring-2 ring-accent' : ''}`}>
                      <ColorSwatchIcon className="w-8 h-8 text-gray-500"/>
                    </button>
                    {bgType === 'color' && (
                      <div className="flex items-center gap-2">
                        {colorOptions.map(color => (
                          <button key={color} onClick={() => setBgColor(color)} style={{backgroundColor: color}} className={`w-8 h-8 rounded-full border-2 transition-transform transform hover:scale-110 ${bgColor === color ? 'border-accent ring-2 ring-accent' : 'border-white'}`}/>
                        ))}
                      </div>
                    )}
                  </div>
                  <a href={processedImage} download="removed-bg.png" className="w-full sm:w-auto bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all flex items-center justify-center gap-2">
                    <CheckCircleIcon className="w-6 h-6"/>
                    Download HD
                  </a>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <input type="file" ref={fileInputRef} onChange={onFileChange} accept="image/*" className="hidden" />
                <button onClick={handleUploadClick} className="mt-4 bg-accent text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-all flex items-center gap-2 mx-auto">
                    <SparklesIcon className="w-6 h-6"/>
                    Try Another Photo
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
