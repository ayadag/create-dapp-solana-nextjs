import { JitsiMeeting } from "@jitsi/react-sdk";
import type { NextPage } from "next";


import dynamic from "next/dynamic";
import { FC } from "react";
import { IJitsiMeetingProps } from "@jitsi/react-sdk/lib/types";

const JitsiMeeting = dynamic(
  () =>
    import("@jitsi/react-sdk").then(({ JitsiMeeting }) => JitsiMeeting) as any,
  {
    ssr: false,
  }
) as FC<IJitsiMeetingProps>;



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