import React from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import routes from '@/constants/routes';

const breakpoints = {
  mobile: '768px',
};

interface NavItemProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

export default function BottomNav() {
  const location = useLocation();

  return (
    <S.Container>
      <S.NavItem to={routes.home} active={location.pathname === routes.home}>
        <S.Icon src="/icons/bottomNavbar/home.svg" alt="Home" />홈
      </S.NavItem>

      <S.NavItem to={routes.map} active={location.pathname === routes.map}>
        <S.Icon src="/icons/bottomNavbar/marker.svg" alt="Marker" />
        지도 탐색
      </S.NavItem>
      <S.NavItem to={routes.myPickles} active={location.pathname === routes.myPickles}>
        <S.Icon src="/icons/bottomNavbar/myPickle.svg" alt="My Pickle" />내 피클
      </S.NavItem>
      <S.NavItem to={routes.chatList} active={location.pathname === routes.chatList}>
        <S.Icon src="/icons/bottomNavbar/message.svg" alt="Message" />
        피클 메세지
      </S.NavItem>
      <S.NavItem to={routes.mypage} active={location.pathname === routes.mypage}>
        <S.Icon src="/icons/bottomNavbar/myPage.svg" alt="My Page" />
        마이 페이지
      </S.NavItem>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;

    display: flex;
    z-index: 9999;
    justify-content: space-between;
    align-items: center;

    transform: translateX(-50%);
    width: 100%;
    max-width: 76.7rem;
    height: 8.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 2rem 2rem 0 0;
    background-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 100%;
    }
  `,

  NavItem: styled(({ active, ...props }: NavItemProps) => <Link {...props} />)<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 5rem;
    opacity: ${props => (props.active ? 1 : 0.5)};
    text-decoration: none;

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  `,
  Icon: styled.img`
    height: 100%;
    margin-bottom: 0.8rem;
    @media (max-width: 500px) {
      height: 45%;
    }
  `,
};
