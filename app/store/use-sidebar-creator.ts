import { create } from "zustand";

interface useCreatorSideBarProps {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useCreatorSideBar = create<useCreatorSideBarProps>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
