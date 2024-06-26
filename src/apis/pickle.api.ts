import client from '@/apis/axios';
import { API, API_PICKLE } from '@/constants/API';
import { Coordinates, SortByOptions, CreatePickleData, CreateReviewData } from './types/pickles.type';

export const picklesRequests = Object.freeze({
  // 피클 전체 목록조회
  get: async (sortBy: SortByOptions['option'] = '전체') => {
    const { data } = await client.get(`${API.PICKLE}`, {
      params: { sortBy },
    });
    return data;
  },

  // 인기 피클
  getPopular: async (category: string = '') => {
    const { data } = await client.get(API_PICKLE.POPULAR, {
      params: category && category !== '전체' ? { category } : {},
    });
    return data;
  },

  // 마감 임박 피클
  getHotTime: async (category: string = '') => {
    const { data } = await client.get(API_PICKLE.HOT_TIME, {
      params: category && category !== '전체' ? { category } : {},
    });
    return data;
  },

  // 가까운 피클
  getNearby: async (location: Coordinates | null, level: number) => {
    if (location === null) return null;
    const { data } = await client.get(API_PICKLE.NEARBY, {
      params: {
        level,
        latitude: location.latitude,
        longitude: location.longitude,
      },
    });
    return data;
  },

  // 피클 생성
  createPickle: async (pickleData: CreatePickleData) => {
    const { data } = await client.post(API_PICKLE.CREATE, pickleData);
    return data;
  },

  // 피클 수정
  editPickle: async (pickleId: string, pickleData: CreatePickleData) => {
    const { data } = await client.put(API_PICKLE.EDIT(pickleId), pickleData);
    return data;
  },

  // 피클 상세조회
  getPickleDetail: (pickleId: string) => {
    return client.get(API_PICKLE.BY_ID(pickleId));
  },

  // 피클 좋아요 수 조회
  getLikeCount: (pickleId: string) => {
    return client.get(API_PICKLE.FAVORITES_COUNT(pickleId));
  },

  // 내가 작성한 리뷰 조회
  getMyReviews: () => {
    return client.get(API_PICKLE.REVIEWS());
  },

  // 리뷰 작성
  createReview: (pickleId: string, reviewData: CreateReviewData) => {
    return client.post(API_PICKLE.REVIEW(pickleId), {
      data: reviewData,
    });
  },

  // 리뷰 삭제
  deleteReview: (pickleId: string) => {
    return client.delete(API_PICKLE.REVIEW(pickleId));
  },

  // 신청중인 피클 조회
  getPendingPickles: async () => {
    const { data } = await client.get(API_PICKLE.MY_PENDING_PICKLES);
    return data;
  },

  //진행중(투데이) 피클 조회
  getProceedingPickles: async () => {
    const { data } = await client.get(API_PICKLE.MY_PROCEEDING_PICKLES);
    return data;
  },

  //끝난 피클 조회
  getFinishPickles: async () => {
    const { data } = await client.get(API_PICKLE.MY_FINISH_PICKLES);
    return data;
  },

  // 피클 이미지 생성(라이브러리에서 선택)
  createImgUrl: (imageFile: File) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    return client.post(API_PICKLE.CREATE_IMG, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // 피클 이미지 생성(AI)
  createGeneratedImgUrl: async (imgUrl: string) => {
    return await client.post(API_PICKLE.CREATE_GENERATED_IMG, { imageUrl: imgUrl });
  },

  viewCountUp: async (pickleId: string) => {
    const { data } = await client.put(API_PICKLE.VIEW_COUNT_UP(pickleId));
  }
});
