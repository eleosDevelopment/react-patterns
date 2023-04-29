import { SplitScreenFunc } from "../split-screen.js";

export function SplitScreen() {
  const LeftHandComponent = ({name}) => {
    return <h1 style={{ backgroundColor: "#9b5de5" }}>{name}</h1>;
  };
  const RightHandComponent = ({message}) => {
    return <h1 style={{ backgroundColor: "#f15bb5" }}>{message}</h1>;
  };
  return (
    <section>
      <SplitScreenFunc leftWeight={1} rightWeight={3}>
        <LeftHandComponent name={"Hernan Parker"}/>
        <RightHandComponent message={"Server is running"}/>
      </SplitScreenFunc>
    </section>
  );
}
