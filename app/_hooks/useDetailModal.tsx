import { create } from "zustand";
import { Target } from "../_components/DetailModal";

interface DetailModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  target?: Target;
}

const useDetailModal = create<DetailModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDetailModal;
