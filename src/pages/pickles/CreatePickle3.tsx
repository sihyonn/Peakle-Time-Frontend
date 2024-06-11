import usePickleCreation from '@/hooks/zustand/usePickleCreation';
import React from 'react';
import axios from 'axios';
import client from '@/apis/axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputComponent,
  StepIndicator,
  StepIndicatorContainer,
  SubmitButton,
  Title,
  TitleContainer,
} from './CreatePickleStyled';

export default function CreatePickle3() {
  const {
    title,
    capacity,
    cost,
    deadLine,
    where,
    when,
    category,
    explanation,
    viewCount,
    latitude,
    longitude,
    setTitle,
    setCapacity,
    setCost,
    setDeadLine,
    setWhere,
    setWhen,
    setCategory,
    setExplanation,
    setViewCount,
    setLatitude,
    setLongitude,
  } = usePickleCreation();
  const navigate = useNavigate();

  return (
    <Container>
      <TitleContainer>
        <Title>
          <img src="icons/back.svg" alt="back" onClick={() => navigate('/pickle-create-1')} />
          <div>피클 생성</div>
        </Title>
        <StepIndicatorContainer>
          <StepIndicator $selected={false}>1</StepIndicator>
          <StepIndicator $selected={false}>2</StepIndicator>
          <StepIndicator $selected={true}>3</StepIndicator>
          <StepIndicator $selected={false}>4</StepIndicator>
        </StepIndicatorContainer>
      </TitleContainer>

      <InputComponent>
        <label htmlFor="category">대표이미지:</label>
        {/* <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} /> */}
      </InputComponent>
      <InputComponent>
        <label htmlFor="when">설명:</label>
        {/* <input type="text" id="when" value={when} onChange={e => setWhen(e.target.value)} /> */}
      </InputComponent>
      <InputComponent>
        <label htmlFor="cost">참여인원:</label>
        {/* <input type="text" id="cost" value={cost} onChange={e => setCost(e.target.value)} /> */}
      </InputComponent>
      <InputComponent>
        <label htmlFor="cost">목표:</label>
        {/* <input type="text" id="cost" value={cost} onChange={e => setCost(e.target.value)} /> */}
      </InputComponent>
      <SubmitButton onClick={() => navigate('/pickle-create-4')}>다음 단계로 넘어가기</SubmitButton>
    </Container>
  );
}