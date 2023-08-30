import { possibleGestures } from "@hooks/useGesture";

interface PossibleSignIndicatorProps {
  possibleGestures: possibleGestures;
}

const PossibleSignIndicator = ({
  possibleGestures,
}: PossibleSignIndicatorProps): JSX.Element => {

  if (!possibleGestures) return <></>;
  return <p>Possible letters: {possibleGestures.toString()}</p>;
  
};

export default PossibleSignIndicator;
