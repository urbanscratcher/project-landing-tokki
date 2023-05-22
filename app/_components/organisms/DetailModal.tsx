"use client";

import useDetailModal from "../../_hooks/useDetailModal";
import Modal from "../atoms/Modal";
import Spec, { SpecInfo } from "../molecules/Spec";

export enum Target {
  "WHITE" = "whiteLabel",
  "BLACK" = "blackLabel",
  "GOLD" = "goldLabel",
  "VODKA" = "vodka",
  "GIN" = "gin",
}

const whiteLabel: SpecInfo = {
  title: "Tokki Soju White Label",
  specs: [
    "375ml",
    "23% ABV",
    "Made with glutinous rice, nuruk, and water",
    "No additives or preservatives",
    "Contains ~800g of rice",
  ],
};

const blackLabel: SpecInfo = {
  title: "Tokki Soju Black Label",
  specs: [
    "375ml & 750ml",
    "40% ABV",
    "Made with glutinous rice, nuruk, and water",
    "No additives or preservatives",
    "Contains ~3kg of rice",
  ],
};

const goldLabel: SpecInfo = {
  title: "Tokki Soju Gold Label",
  specs: [
    "3375ml & 750ml",
    "46% ABV",
    "Aged in US Virgin Oak Barrels",
    "No additives or preservatives",
    "Contains ~3.5kg of rice",
  ],
};

const vodka: SpecInfo = {
  title: "Sonbi Vodka",
  specs: ["750ml", "40% ABV", "Triple distilled, quadruple filtered"],
};

const gin: SpecInfo = {
  title: "Sonbi Gin",
  specs: ["750ml", "48% ABV", "Made with 12 unique botanicals"],
};

const DetailModal = () => {
  const detailModal = useDetailModal();

  let info;
  detailModal.target === Target.WHITE
    ? (info = whiteLabel)
    : detailModal.target === Target.BLACK
    ? (info = blackLabel)
    : detailModal.target === Target.GOLD
    ? (info = goldLabel)
    : detailModal.target === Target.VODKA
    ? (info = vodka)
    : (info = gin);

  return (
    <Modal
      isOpen={detailModal.isOpen}
      onClose={detailModal.onClose}
      onClickOutside={detailModal.onClose}
    >
      <Spec info={info} />
    </Modal>
  );
};

export default DetailModal;
