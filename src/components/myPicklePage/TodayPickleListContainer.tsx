import styled from '@emotion/styled';
import PagenationBar from './PagenationBar';
import TodayPickleCard from './TodayPickleCard';
import Tilt from 'react-parallax-tilt';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { isButtonActive, getTimeGapMessage } from '@/utils/todayPickleCardUtils';
import { useGetProceedingPickles } from '@/hooks/query/pickles';
import betweenLength from '@/utils/betweenLength';
import { When } from '@/apis/types/pickles.type';

export interface TodayPickleDataType {
  capacity: number;
  category: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
  deadLine: string;
  explanation: string;
  goals: string[];
  imgUrl: string;
  isCancelled: boolean;
  latitude: number;
  longtitude: number;
  leader: string;
  like: number;
  place: string;
  participantNumber: number;
  title: string;
  viewCount: number;
  when: When;
  address: string;
  detailedAddress: string;
  id: string;
}

export default function TodayPickleListContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [distance, setDistance] = useState(0);

  // server state
  const { data } = useGetProceedingPickles();
  
  const currentPage = useMemo(() => {
    return Number(searchParams.get('page')) || 1;
  }, [searchParams]);

  // console.log(data?.todayPickles[currentPage-1]);

  const handleAttendance = () => {
    // alert(`${location?.longitude} ,${location?.latitude}`);
  };

  useEffect(() => {
    const getDistance = async () => {
      if (!data?.todayPickles || data?.todayPickles.length === 0) return;
      const distance = await betweenLength({
        latitude: data?.todayPickles[currentPage - 1].latitude,
        longitude: data?.todayPickles[currentPage - 1].longtitude,
      });
      setDistance(distance);
    };
    getDistance();
  }, [currentPage]);

  if (!data?.todayPickles || data?.todayPickles.length === 0) {
    return null; // 오늘의 피클이 없습니다
  }

  return (
    <S.Container>
      <PagenationBar totalDataCount={data?.todayPickles.length} />
      <Tilt>
        <TodayPickleCard cardData={data?.todayPickles[currentPage - 1]} distance={0} />
      </Tilt>
      <S.AttendanceButton
        onClick={handleAttendance}
        disabled={!isButtonActive(data?.todayPickles[currentPage - 1].startHour, data?.todayPickles[currentPage - 1].startMinute)}
      >
        <span>출석하기</span>
      </S.AttendanceButton>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 34.4rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
  AttendanceButton: styled.button`
    width: 100%;
    background: #5dc26d;
    color: #fff;
    font-size: 1.4rem;
    padding: 1rem 0;
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:disabled {
      background: #d0d0d0;
      color: #8b8d94;
      cursor: auto;
    }
  `,
};
