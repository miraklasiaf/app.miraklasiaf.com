export default function Default({ children }) {
  return (
    <div>
      <main id="skip" className="flex justify-center items-center bg-gray-100 h-screen p-4">
        {children}
      </main>
    </div>
  )
}
