import Link from "next/link";
import styles from "../styles/Navbar.module.css"; 
import { useRouter } from "next/router";

function Navbar() {
  const router=useRouter();
  const handleNavigate=()=>{
    router.push("/SportNews");
  }
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <div className={styles.navbar}>
        <a className="nav-link" href="/SportNews">Home</a>
        <a className="nav-link" href="/EntertainmentNews">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <Link href='/SportNews'>Home</Link>
        </div>
  </div>
</nav>
    </div>
  );
}
export default Navbar;
