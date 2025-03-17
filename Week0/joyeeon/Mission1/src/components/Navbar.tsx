const Navbar: React.FC = () =>{
    return(
        <nav className="navbar">
            <img className="icon"
            src="UMC_logo.png" alt="로고" />

            <article className = "taps">
                <span>소개</span>
                <span>프로젝트</span>
                <span>Q&A</span>
                <span>지원하기</span>
                
            </article>
            <img  className="hambuger" src="Hambuger.png" alt="햄버거" />
        </nav>
    )
}

export default Navbar;