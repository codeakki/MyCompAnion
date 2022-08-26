import ReactGoogleSlides from "react-google-slides";

const PPT = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/1pNJWKgKB4jG15DATPM6Py16Izgydj2aNkSvEW0zWKyk/edit#slide=id.p"
      slideDuration={5}
      showControls
      loop
    />
  );
};

export default PPT;