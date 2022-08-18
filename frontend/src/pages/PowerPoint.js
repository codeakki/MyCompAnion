import ReactGoogleSlides from "react-google-slides";

const PPT = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
      slideDuration={5}
      showControls
      loop
    />
  );
};

export default PPT;