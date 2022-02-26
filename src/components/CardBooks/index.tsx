import React from 'react';

import { BookProps } from '../../hooks/useBooks';

import { 
  Container,
  Photo,
  Content,
  Title,
  Author,
  Description,
  DivTitle,
  DivDescription
} from "./styles";

interface Props {
  data: BookProps;
  onClick: () => void;
}

export function CardBooks({ data, onClick } : Props) {
  return (
    <Container onClick={onClick}>
      <Photo><img src={data?.imageUrl}/></Photo>

      <Content>
        <DivTitle>
          <Title>{data?.title}</Title>
          <Author>{data?.authors}</Author>
        </DivTitle>
        <DivDescription>
          <Description>{data?.pageCount} páginas</Description>
          <Description>{data?.publisher}</Description>
          <Description>Públicado em {data?.published}</Description>
        </DivDescription>
      </Content>
    </Container>
  );
}
