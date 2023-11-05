import { useCallback } from "react";
import { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

const Album = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {  index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photos = [
    {
      src: "https://i.ibb.co/DVR54Vz/298341975-5112958278832175-2923123454450206909-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/r3QSdVr/298120985-3200261916852569-2992966787769403655-n.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/MZMgRQQ/298176494-3200261810185913-8958911240534128674-n.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/wyRnDM1/93532612-10215710337406573-1626459159572512768-n.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/gD9c7rb/298378761-3200261956852565-3813195000060574303-n.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/FbXpm3x/93251974-10215710347286820-8316682978717597696-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/KLzBpYW/298387015-3200261860185908-8469333078558299837-n.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/KsFQsLw/375465352-3753136658255502-5357622674567554631-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/xfmq3ZL/375572328-3753138184922016-4132216448619528708-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/VjSPRqW/373609444-3753138124922022-6450089164857832472-n.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/5v8V1hM/298113801-3200262613519166-5935846132351158084-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/hYhxFfN/316123497-819931115890556-5548425627543033734-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/0FymGfk/93013509-10215708215553528-1925388118869934080-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/hs15nsM/362967465-10222091524932273-6213903406939221926-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/T4h1WGW/270125387-10228329403168526-6807824750742541936-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/XbPgQdF/298163993-5112958895498780-2036601150142618795-n.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/t4J7MmY/298221559-5112958622165474-209641830042013196-n.jpg",
      width: 4,
      height: 3
    }
  ]
  return (
    <section className="my-10" >
     <div className="lg:px-6 bg-base-100 shadow-xl   p-6">
     <div className=" lg:w-[90%] mx-auto my-5 ">
        <h1 className="lg:text-[2rem] md:text-[1.5rem] uppercase text-[1rem]
         font-bold font-[sans-serif] text-secondary">
        Our Photo Album
        </h1>
        <div className="lg:w-20 mb-5 w-12 h-0.5 bg-accent"></div>
      </div>
      <Gallery onClick={openLightbox} photos={photos} />;
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
     </div>
    </section>
  );
};

export default Album;
