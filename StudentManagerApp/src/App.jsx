
import { StudentProvider } from "./context/StudentContext"
import AppContent from "./components/AppContent"
function App(){
  return (
    <>
      <StudentProvider>
          <AppContent />
      </StudentProvider>
    </>
  )
}

export default App