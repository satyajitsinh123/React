import Profile from "./profile";

function Gallery() {
  return (
    <div className="container">
      <h1 className="hedding text-center">Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imgurl={"szV5sdG"}
        profession="physicist and chemist"
        Awardsno=" 4"
        Awards=" (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        Discovered=" polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imgurl={"YfeOqp2"}
        profession="geochemist"
        Awardsno=" 2"
        Awards=" (Miyake Prize for geochemistry, Tanaka Prize)"
        Discovered=" a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}

export default Gallery;

// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.
// You’ll need to choose what props to pass to it.
