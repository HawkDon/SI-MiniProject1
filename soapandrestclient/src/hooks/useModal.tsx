import React from "react";

export default (): [boolean, () => void, () => void] => {
  const [modal, setModal] = React.useState<boolean>(false);

  const handleOpenModal = () => setModal(true);

  const handleCloseModal = () => setModal(false);

  return [modal, handleOpenModal, handleCloseModal];
};
