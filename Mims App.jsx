import { useEffect } from "react"
import Calculator from "./components/Calculator"

export default function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKeys = [
        ...Array.from({ length: 10 }, (_, i) => i.toString()),
        ".", "+", "-", "*", "/", "%", "Enter", "Backspace", "Escape",
      ]
      if (!allowedKeys.includes(e.key)) return

      const button = document.querySelector(`button[data-key="${e.key}"]`)
      if (button) button.click()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Calculator />
    </div>
  )
}
