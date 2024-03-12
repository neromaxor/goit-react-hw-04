import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    padding: "0",
    outline: "none",
  },
};

const ImageModal = ({ isOpen, closeModal, imageData }) => {
  if (!imageData) {
    return null;
  }

  const { urls, alt_description } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
      closeOnClickOutside={true}
    >
      <img
        src={urls.regular}
        alt={alt_description}
        style={{ width: "100%", height: "90vh", objectFit: "contain" }}
      />
    </Modal>
  );
};

export default ImageModal;
