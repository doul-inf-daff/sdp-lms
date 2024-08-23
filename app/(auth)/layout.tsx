
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex flex-col justify-center items-center min-h-full">
        {children}
      </div>
  )
}