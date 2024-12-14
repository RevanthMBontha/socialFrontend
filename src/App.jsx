import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import IsAuthRoute from "./layouts/IsAuthRoute";
import Error from "./errors/Error";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import IsNotAuthRoute from "./layouts/IsNotAuthRoute";
import EditProfile from "./pages/EditProfile";
import NewPost from "./pages/NewPost";
import CameraCapture from "./pages/CameraCapture";

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<IsAuthRoute />}>
            <Route path="/" element={<Feed />} />
            <Route path="profile/:profileId" element={<Profile />} />
            <Route path="profile/:profileId/edit" element={<EditProfile />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/capture" element={<CameraCapture />} />
          </Route>
          <Route element={<IsNotAuthRoute />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
