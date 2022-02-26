import AuthProvider from "./useAuth";
import BooksProvider from "./useBooks";

export function AppProvider({ children }: any) {
  return (
    <AuthProvider>
      <BooksProvider>
        {children}
      </BooksProvider>
    </AuthProvider>
  )
}