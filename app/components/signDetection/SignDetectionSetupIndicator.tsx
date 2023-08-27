import { useGestureReturn } from "@hooks/useGesture";

interface SignDetectionSetupIndicatorProps {
  isFingerPoseLoaded: useGestureReturn["isFingerPoseLoaded"];
  isCameraLoaded: useGestureReturn["isCameraLoaded"];
  error: useGestureReturn["error"];
}

const SignDetectionSetupIndicator = ({
  isFingerPoseLoaded,
  isCameraLoaded,
  error,
}: SignDetectionSetupIndicatorProps): JSX.Element => {
  return (
    <ul>
      <li>Camera loaded: {isCameraLoaded ? "Yes" : "No"}</li>
      <li>Model loaded: {isFingerPoseLoaded ? "Yes" : "No"}</li>
      {error ? <li>Error: {error}</li> : null}
    </ul>
  );
};

export default SignDetectionSetupIndicator;
