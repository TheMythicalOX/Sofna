import { create } from "zustand";

interface MixerStore {
  routing: boolean[][];
  inMuted: boolean[];
  inSoloed: boolean[];
  outMuted: boolean[];
  outSoloed: boolean[];

  toggleRoute: (inID: number, outID: number) => void;
  toggleInMute: (inID: number) => void;
  toggleInSolo: (inID: number) => void;
  toggleOutMute: (inID: number) => void;
  toggleOutSolo: (inID: number) => void;
}

export const useMixerStore = create<MixerStore>((set) => ({
  routing: Array.from({ length: 8 }, () => Array(8).fill(false)),

  inMuted: Array(8).fill(false),
  inSoloed: Array(8).fill(false),

  outMuted: Array(8).fill(false),
  outSoloed: Array(8).fill(false),

  toggleRoute: (inID, outID) =>
    set((state) => ({
      routing: state.routing.map((row, r) =>
        r === inID ? row.map((val, c) => (c === outID ? !val : val)) : row,
      ),
    })),

  toggleInMute: (inID) =>
    set((state) => ({
      inMuted: state.inMuted.map((val, i) => (i === inID ? !val : val)),
    })),

  toggleInSolo: (inID) =>
    set((state) => ({
      inSoloed: state.inSoloed.map((val, i) => (i === inID ? !val : val)),
    })),

  toggleOutMute: (outID) =>
    set((state) => ({
      outMuted: state.outMuted.map((val, i) => (i === outID ? !val : val)),
    })),

  toggleOutSolo: (outID) =>
    set((state) => ({
      outSoloed: state.outSoloed.map((val, i) => (i === outID ? !val : val)),
    })),
}));
