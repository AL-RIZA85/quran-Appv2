import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div >
      
      <div className="flex justify-center mt-50">
        <Link to ="/SurahList">
          <Button color="green" >Mulai Membaca</Button>
        </Link>
      </div>
    </div>
  );
}