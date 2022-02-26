import Modal from "react-modal";

import "./style.css";

import closeModalImg from "../../assets/png/CloseModal.png";
import { BookProps } from "../../hooks/useBooks";

import {
  Container,
  ButtonClose,
  Photo,
  Content,
  Title,
  Author,
  Info,
  TitleInfo,
  InfoLabel,
  InfoValue,
  Review,
  TitleReview,
  Text,
  IconQuotes,
} from "./styles";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  data: BookProps;
  onRequestClose: () => void;
}

export function NewModal({ data, isOpen, onRequestClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      style={
        window.screen.width < 560
          ? { content: { width: "90%" } }
          : { content: { width: "55%" } }
      }
    >
      <ButtonClose type="button" onClick={onRequestClose}>
        <img src={closeModalImg} alt="Fechar" />
      </ButtonClose>

      <Container>
        <Photo>
          <img src={data?.imageUrl} />
        </Photo>

        <Content>
          <Title>{data?.title}</Title>
          <Author>{data?.authors}</Author>

          <Info>
            <TitleInfo>Informações</TitleInfo>

            <div>
              <InfoLabel>Páginas</InfoLabel>
              <InfoValue>{data?.pageCount}</InfoValue>
            </div>
            <div>
              <InfoLabel>Editora</InfoLabel>
              <InfoValue>{data?.publisher}</InfoValue>
            </div>
            <div>
              <InfoLabel>Publicação</InfoLabel>
              <InfoValue>{data?.published}</InfoValue>
            </div>
            <div>
              <InfoLabel>Idioma</InfoLabel>
              <InfoValue>{data?.language}</InfoValue>
            </div>
            <div>
              <InfoLabel>Título Original</InfoLabel>
              <InfoValue>{data?.title}</InfoValue>
            </div>
            <div>
              <InfoLabel>ISBN-10</InfoLabel>
              <InfoValue>{data?.isbn10}</InfoValue>
            </div>
            <div>
              <InfoLabel>ISBN-13</InfoLabel>
              <InfoValue>{data?.isbn13}</InfoValue>
            </div>
          </Info>

          <Review>
            <TitleReview>Resenha da editora</TitleReview>

            <Text>
              <IconQuotes />
              <p>
                Resenha da editora The subject of “design thinking” is the rage
                at business schools, throughout corporations, and increasingly
                in the popular press—due in large part to the work of IDEO, a
                leading design firm, and its celebrated CEO, Tim Brown, who uses
                this book to show how the techniques and strategies of design
                belong at every level of business.
              </p>
            </Text>
          </Review>
        </Content>
      </Container>
    </Modal>
  );
}
