import Navbar from "@/components/Navbar";
import { useQuery, gql } from "@apollo/client";
// import CountriesList from "@/components/CountriesList";

function SportNews() {
    const Get_countries = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
  const { data, loading, error } = useQuery(Get_countries);
  if (loading) {
    return (
      <h2>
        Loading...
      </h2>
    );
  }
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>Hyderabad NewsPaper</h1>
      <Navbar />
      <h1>SportNews</h1>
      {/* <CountriesList data={data.countries}/> */}
    </div>
  );
}
export default SportNews;
