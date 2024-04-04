import { JitsiMeeting } from "@jitsi/react-sdk";
import type { NextPage } from "next";

const Meeting: NextPage = () => {
return (

<JitsiMeeting
roomName={"nihal"}
configOverwrite={{
startWithAudioMuted: true,
disableModeratorIndicator: true,
startScreenSharing: true,
enableEmailInStats: false,
}}
interfaceConfigOverwrite={{
DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
}}
userInfo={{
displayName: "YOUR_USERNAME",
email: "nihal@gmail.com",
}}
// onApiReady={(externalApi) => handleApiReady(externalApi)}
// onReadyToClose={handleReadyToClose}
// getIFrameRef={handleJitsiIFrameRef1}
/>

);
};
export default Meeting;