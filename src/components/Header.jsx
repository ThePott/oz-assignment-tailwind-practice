export default function Header() {
  return (
    // <header className="header-container">
    <header className="flex justify-between items-center py-[10px] px-5 bg-black">
      <h2>OZ코딩스쿨</h2>
      {/* <ul className="menu-container"> */}
      <ul className="flex justify-center items-center gap-5">
        <li className="text-[13px] font-normal list-none">로그인</li>
        <li className="text-[13px] font-normal list-none">회원가입</li>
        <li className="text-[13px] font-normal list-none">내클래스</li>
      </ul>
    </header>
  );
}
