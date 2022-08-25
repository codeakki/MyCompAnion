import ReactGoogleSlides from "react-google-slides";

const PPT = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/1RBnM3iEHMcTGrRHdtfVzY-9_yYjfZe66/edit#slide=id.p1"
      slideDuration={5}
      showControls
      loop
    />
  );
};

export default PPT;