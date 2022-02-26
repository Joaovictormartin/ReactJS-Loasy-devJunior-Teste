import { useState, useEffect, useContext, createContext } from "react";

import { HttpService } from "../services/HttpService";
import { useAuth } from "./useAuth";

export interface BookProps {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

interface BooksState {
  data: BookProps[];
  page: number;
  totalPages: number;
  totalItems: number;
}

interface BooksContext {
  books: BookProps[];
  bookSelected: BookProps;
  pageCurrent: number;
  totalPages: number;
  isLoadingBook: boolean;
  getBooksDate: () => void;
  searchBooks: (id: string) => void;
  paginationBooks: (page: number) => void;
}

function BooksProvider({ children }: any) {
  const { token } = useAuth();

  const [data, setData] = useState<BooksState>({} as BooksState);
  const [bookSelected, setBookSelected] = useState<BookProps>({} as BookProps);
  const [isLoadingBook, setIsLoadingBook] = useState(false);

  //buscar os livros
  async function getBooksDate() {
    try {
      setIsLoadingBook(true);

      const response = await HttpService.get("/books", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: "1",
          amount: "15",
          title: null,
          category: null,
          published: null,
        },
      })

      setData(response.data);
    } catch (error) {
    } finally {
      setIsLoadingBook(false);
    }
  }

  //paginação
  async function paginationBooks(page: number) {
    try {
      setIsLoadingBook(true);

      const response = await HttpService.get("/books", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: String(page),
          amount: "15",
          title: null,
          category: null,
          published: null,
        },
      })

      setData(response.data);
    } catch (error) {
    } finally {
      setIsLoadingBook(false);
    }
  }

  //buscar livro selecionado
  async function searchBooks(id: string) {
    try {
      setIsLoadingBook(true);

      const response = await HttpService.get(`/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setBookSelected(response.data);
    } catch (error) {
    } finally {
      setIsLoadingBook(false);
    }
  }

  return (
    <bookContext.Provider
      value={{
        books: data.data,
        bookSelected: bookSelected,
        pageCurrent: data.page,
        totalPages: data.totalPages,
        isLoadingBook,
        getBooksDate,
        searchBooks,
        paginationBooks,
      }}
    >
      {children}
    </bookContext.Provider>
  );
}

const bookContext = createContext<BooksContext>({} as BooksContext);

function useBook(): BooksContext {
  const context = useContext(bookContext);

  return context;
}

export { useBook, useContext };

export default BooksProvider;
