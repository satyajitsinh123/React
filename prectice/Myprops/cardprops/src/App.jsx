import Card from "./Card";
import img1 from "./assets/img-1.jpeg";
import img2 from "./assets/img-2.jpeg";
import img3 from "./assets/img-3.jpeg";
import img4 from "./assets/img-4.jpeg";
function App() {
  return (
    <div className="container d-flex flex-wrap gap-4 mt-5">
      <Card
        img={img1}
        title="Fire"
        pera="fighting fires and protecting people and property from fires; Rescuing people from Road Traffic Accidents; and."
      />
      <Card
        img={img2}
        title="Red-fire"
        pera="Statutory Order and can be amended in line with how the role of the Service may change in the future."
      />
      <Card
        img={img3}
        title="Fire Brigade"
        pera="extinguishing fires in their area. protecting life and property in the event area.property from fire and other accidents."
      />
      <Card
        img={img4}
        title="Heigh fire"
        pera=" high quality emergency services and preventive measures. To protect people's life & property from fire and other accidents."
      />
    </div>
  );
}

export default App;
