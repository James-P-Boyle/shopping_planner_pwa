import { useNavigate } from "react-router-dom"

export default function BackButton() {

  const navigate = useNavigate()
  const showBackButton = location.pathname !== "/"
  const handleBack = () => {
    navigate(-1)
  }

  return showBackButton && (
    <button id="backButton" onClick={handleBack}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width={3} fill="none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
      </svg>
    </button>
  )
}
