import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const d = new Date();
const year = d.getFullYear(); // 년
const month = d.getMonth(); // 월
const day = d.getDate(); // 일

export type DateTypeInInterface = {
  year: number;
  month: number;
  day: number;
};

export type TimeTypeInInterface = {
  hour: number;
  minute: number;
  dayTime: string;
};

const usePickleCreation = create(
  persist<{
    step: 0 | 1 | 2 | 3 | 4;
    title: string;
    capacity: number;
    cost: number;
    deadLine: Date;
    place: string;
    address: string;
    detailedAddress: string;
    areaCode: number;
    latitude: number;
    longitude: number;
    when: {
      summary: string;
      times: Date[];
    };
    category: string;
    explanation: string;
    viewCount: number; // 초기 viewCount
    goals: string[];
    imgUrl: string;
    isImgLoading: boolean;

    startDate: DateTypeInInterface;
    finishDate: DateTypeInInterface;
    selectedDays: number[];
    startTime: TimeTypeInInterface;
    finishTime: TimeTypeInInterface;
    setStep: (step: 1 | 2 | 3 | 4) => void;
    setStartDate: (newStartDate: DateTypeInInterface) => void;
    setFinishDate: (newFinishDate: DateTypeInInterface) => void;
    setSelectedDays: (newSelectedDays: number[]) => void;
    setStartTime: (newStartTime: TimeTypeInInterface) => void;
    setFinishTime: (newFinishTime: TimeTypeInInterface) => void;

    setTitle: (title: string) => void;
    setCapacity: (capacity: number) => void;
    setCost: (cost: number) => void;
    setDeadLine: (deadLine: Date) => void;
    setPlace: (place: string) => void;
    setAddress: (address: string) => void;
    setDetailedAddress: (detailedAddress: string) => void;
    setAreaCode: (areaCode: number) => void;
    setLatitude: (latitude: number) => void;
    setLongitude: (longitude: number) => void;
    setWhen: (when: { summary: string; times: Date[] }) => void;
    setCategory: (category: string) => void;
    setExplanation: (explanation: string) => void;
    setViewCount: (viewCount: number) => void;
    setGoals: (goals: string[]) => void;
    setImgUrl: (imgUrl: string) => void;
    setIsImgLoading: (isImgLoading: boolean) => void;
    clear: () => void;
  }>(
    set => ({
      step: 0,
      title: '',
      capacity: 0,
      cost: 0,
      deadLine: new Date(),
      place: '',
      address: '',
      detailedAddress: '',
      areaCode: 0,
      latitude: 0,
      longitude: 0,
      when: {
        summary: '',
        times: [],
      },
      category: '',
      explanation: '',
      viewCount: 0,
      goals: [],
      imgUrl: '',
      isImgLoading: false,
      setStep: (step: 1 | 2 | 3 | 4) => set({ step }),
      setTitle: (title: string) => set({ title }),
      setCapacity: (capacity: number) => set({ capacity }),
      setCost: (cost: number | undefined) => set({ cost }),
      setDeadLine: (deadLine: Date) => set({ deadLine }),
      setPlace: (place: string) => set({ place }),
      setAddress: (address: string) => set({ address }),
      setDetailedAddress: (detailedAddress: string) => set({ detailedAddress }),
      setAreaCode: (areaCode: number) => set({ areaCode }),
      setLatitude: (latitude: number) => set({ latitude }),
      setLongitude: (longitude: number) => set({ longitude }),
      setWhen: (when: { summary: string; times: Date[] }) => set({ when }),
      setCategory: (category: string) => set({ category }),
      setExplanation: (explanation: string) => set({ explanation }),
      setViewCount: (viewCount: number) => set({ viewCount }),
      setGoals: (goals: string[]) => set({ goals }),
      setImgUrl: (imgUrl: string) => set({ imgUrl }),
      clear: () => set({}),
      setIsImgLoading: (isImgLoading: boolean) => set({ isImgLoading }),

      startDate: { year, month: month + 1, day: day + 8 },
      finishDate: { year, month: month + 1, day: day + 8 },
      selectedDays: [],
      startTime: { hour: 9, minute: 0, dayTime: 'AM' },
      finishTime: { hour: 10, minute: 0, dayTime: 'AM' },
      setStartDate: (newStartDate: { year: number; month: number; day: number }) =>
        set(state => ({ ...state, startDate: newStartDate })),
      setFinishDate: (newFinishDate: { year: number; month: number; day: number }) =>
        set(state => ({ ...state, finishDate: newFinishDate })),
      setSelectedDays: (newSelectedDays: any[]) => set(state => ({ ...state, selectedDays: newSelectedDays })),
      setStartTime: (newStartTime: { hour: number; minute: number; dayTime: string }) =>
        set(state => ({ ...state, startTime: newStartTime })),
      setFinishTime: (newFinishTime: { hour: number; minute: number; dayTime: string }) =>
        set(state => ({ ...state, finishTime: newFinishTime })),
    }),
    {
      name: 'create-pickle-storage',
    },
  ),
);

export default usePickleCreation;
