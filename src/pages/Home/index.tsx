import React, { useState, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useBook } from "../../hooks/useBooks";

import { CardBooks } from "../../components/CardBooks";
import { NewModal } from "../../components/NewModal";

import {
  Container,
  Content,
  Header,
  Logo,
  Title,
  Name,
  IconLogout,
  Cards,
  Footer,
  PageNumber,
  IconPrev,
  IconNext,
} from "./styles";

export function Home() {
  const { user, logout } = useAuth();
  const {
    books,
    bookSelected,
    pageCurrent,
    totalPages,
    getBooksDate,
    searchBooks,
    paginationBooks,
  } = useBook();

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  function handleCloseNewModal() {
    setIsNewModalOpen(false);
  }

  function handleLogout() {
    logout();
  }

  function handlePagination(value: "next" | "prev") {
    if (value === "prev" && pageCurrent <= 1) return;

    if (value === "prev") {
      paginationBooks(pageCurrent - 1);
    }

    if (value === "next") {
      paginationBooks(pageCurrent + 1);
    }
  }

  async function handleBookSelected(id: string) {
    searchBooks(id);
    setIsNewModalOpen(true);
  }

  useEffect(() => {
    getBooksDate();
  }, []);

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, [window.screen.width]);

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <Logo />
            <Title>Books</Title>
          </div>
          <div>
            <Name>
              Bem vindo, <strong>{user?.name}!</strong>
            </Name>
            <IconLogout onClick={handleLogout} />
          </div>
        </Header>

        <Cards>
          {books?.map((item) => (
            <CardBooks
              key={item.id}
              data={item}
              onClick={() => handleBookSelected(item.id)}
            />
          ))}
        </Cards>

        <NewModal
          data={bookSelected}
          isOpen={isNewModalOpen}
          onRequestClose={handleCloseNewModal}
        />

        <Footer>
          {screenWidth <= 560 ? (
            <>
              <IconPrev onClick={() => handlePagination("prev")} />
              <PageNumber>
                Página <strong>{pageCurrent}</strong> de{" "}
                <strong>{Math.trunc(totalPages)}</strong>
              </PageNumber>
              <IconNext onClick={() => handlePagination("next")} />
            </>
          ) : (
            <>
              <PageNumber>
                Página <strong>{pageCurrent}</strong> de{" "}
                <strong>{Math.trunc(totalPages)}</strong>
              </PageNumber>
              <IconPrev onClick={() => handlePagination("prev")} />
              <IconNext onClick={() => handlePagination("next")} />
            </>
          )}
        </Footer>
      </Content>
    </Container>
  );
}
