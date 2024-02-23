import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const AdoTechApp = () => {
  

  return (
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
  )
}