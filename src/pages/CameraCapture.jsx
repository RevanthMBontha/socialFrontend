import { useRef, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const CameraCapture = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Start the camera
  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support camera access.");
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
    }
  };

  // Capture a picture
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL("image/png");
      setCapturedImage(image); // Save the captured image
    }
  };

  // Stop the camera
  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col justify-between p-4">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <Button onClick={() => navigate(-1)}>Back</Button>
          <h1 className="text-2xl font-bold">Camera Capture</h1>
        </div>

        <video
          ref={videoRef}
          autoPlay
          className="h-full max-h-[300px] w-full flex-grow-0 rounded-lg border"
        />
        <canvas ref={canvasRef} className="hidden" />
        {capturedImage && (
          <div>
            <h3>Captured Image:</h3>
            <img
              src={capturedImage}
              alt="Captured"
              className="h-full max-h-[300px] w-full flex-grow-0 rounded-lg border"
            />
          </div>
        )}
      </div>

      <div className="mb-8">
        <div className="flex gap-x-2">
          <Button
            className="h-12 w-full rounded-md border bg-green-400 p-0 text-white"
            onClick={startCamera}
          >
            Start Camera
          </Button>
          <Button
            className="h-12 w-full rounded-md border bg-blue-400 p-0 text-white"
            onClick={capturePhoto}
          >
            Capture
          </Button>
          <Button
            className="h-12 w-full rounded-md border bg-red-400 p-0 text-white"
            onClick={stopCamera}
          >
            Stop Camera
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;
