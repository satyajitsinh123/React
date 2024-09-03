import NameComponents from "./Components/Hooks/Usememo/NameComponents";
import ReasultComponents from "./Components/Hooks/Usememo/ReasultComponents";
import MarkComponents from "./Components/MarkComponents";

function App() {
  return (
    <>
      <MarkComponents Mark={60} />
      <NameComponents Name={"Satyajitsinh Gohil"} />
      <ReasultComponents
        Name={"Satyajitsinh Gohil"}
        Mark={90}
        Subject={"hindi"}
        Percentage={50}
      />
    </>
  );
}

export default App;
