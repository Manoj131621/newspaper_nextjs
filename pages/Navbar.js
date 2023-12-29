import Link from "next/link";
import styles from "../styles/Navbar.module.css"; 

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <div className={styles.navbar}>
        <a className="nav-link active"  href="/SportNews">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        </div>
  </div>
</nav>
    </div>
  );
}
export default Navbar;
