export const metadata = {
  title: 'Đăng nhập - EduFlex',
  description: 'Đăng nhập vào tài khoản EduFlex để tiếp tục học tập',
}

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      {children}
    </div>
  )
}